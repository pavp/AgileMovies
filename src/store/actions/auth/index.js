import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@services";

export const fetchAuthLogin = createAsyncThunk(
  "auth/fetchAuthLogin",
  async (values, { rejectWithValue }) => {
    try {
      const response = await API.auth.signIn({ ...values, signin: true });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data
          ? error.response.data.message
          : error.message.replace(" ", "")
      );
    }
  }
);

export const initialState = {
  payload: undefined,
  user: undefined,
  login: {
    loading: false,
    error: undefined,
    status: "idle",
  },
};

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    cleanStateLoading: (state) => {
      state.login.loading = false;
      state.login.error = "";
      state.login.status = "idle";
    },
    logOut: (state) => {
      state.payload = undefined;
      state.user = undefined;
      state.login.loading = false;
      state.login.error = "";
      state.login.status = "idle";
    },
  },
  extraReducers: {
    [fetchAuthLogin.pending]: (state) => {
      state.login.loading = true;
      state.login.status = "loading";
    },
    [fetchAuthLogin.rejected]: (state, action) => {
      state.login.loading = false;
      state.login.status = "failed";
      state.login.error = action.payload;
    },
    [fetchAuthLogin.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.status = "succeeded";
      state.user = action.payload.data.user;
      state.payload = action.payload.data.payload;
    },
  },
});

export const { cleanStateLoading, logOut } = authSlice.actions;

export default authSlice.reducer;
