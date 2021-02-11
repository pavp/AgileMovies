import axios from "axios";
import jwtDecode from "jwt-decode";
import API from "./config";

import AsyncStorage from "@react-native-async-storage/async-storage";

const interceptorRequest = async (request, store) => {
  if (request.data && request.data.signin) {
    return request;
  }

  const accessToken = store.getState().payload?.token;
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

const interceptorResponse = (response, store) => {
  if (response.status === 201) {
    console.log("success 201");
  }

  return response;
};

const handleErrorResponse = async (error, store) => {
  console.log("error", error);
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
