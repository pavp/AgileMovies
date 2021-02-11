import axios from "axios";
import jwtDecode from "jwt-decode";
import API from "./config";

import { refreshToken } from "@store/actions/auth";

const interceptorRequest = async (request, store) => {
  if (request.data && request.data.signin) {
    return request;
  }

  const accessToken = store.getState().auth?.payload.token;
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();
  request.cancelToken = source.token;
  let validToken = false;
  let isExpired = false;

  try {
    const token = await jwtDecode(accessToken);
    if (Date.now() >= token.exp * 1000) {
      validToken = false;
      isExpired = true;
    } else {
      validToken = true;
    }
  } catch {
    validToken = false;
  }

  const errorMessage = isExpired ? "Token Expired" : "Invalid Token";

  if (accessToken && validToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    console.log(errorMessage);
  }
  return request;
};

const refreshTokenService = async (token, config, store) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://161.35.140.236:9005/api/auth/refresh", {
        refresh_token: token,
      })
      .then((res) => {
        store.dispatch(refreshToken(res.data.data));
        config.headers.Authorization = `Bearer ${res.data.data.payload.token}`;
        axios
          .request(config)
          .then((result) => {
            return resolve(result);
          })
          .catch((err) => {
            console.log(err);
            return reject(err);
          });
      })
      .catch((err) => {
        console.log("err", err);
        return reject(err);
      });
  });
};

const interceptorResponse = (response, store) => {
  if (response.status === 201) {
    console.log("success 201");
  }

  return response;
};

const handleErrorResponse = async (error, store) => {
  if (error.config && error.response?.status === 401) {
    return new Promise((resolve, reject) => {
      refreshTokenService(
        store.getState().auth?.payload.refresh_token,
        error.config,
        store
      )
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return Promise.reject(error);
};

const Interceptor = (store) => {
  API.interceptors.request.use((request) => interceptorRequest(request, store));

  API.interceptors.response.use(
    (response) => interceptorResponse(response, store),
    (error) => handleErrorResponse(error, store)
  );
};

export default {
  Interceptor,
};
