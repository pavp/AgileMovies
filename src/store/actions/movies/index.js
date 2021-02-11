import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@services";

export const fetchMoviesPopular = createAsyncThunk(
  "movies/fetchMoviesPopular",
  async (values, { rejectWithValue }) => {
    try {
      const response = await API.movies.getMoviesPopular({
        ...values,
        signin: false,
      });
      console.log(response.data);
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

export const fetchMoviesNow = createAsyncThunk(
  "movies/fetchMoviesNow",
  async (values, { rejectWithValue }) => {
    try {
      const response = await API.movies.getMoviesNow({
        ...values,
        signin: false,
      });
      console.log(response.data);
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
  popular: {
    loading: false,
    error: undefined,
    status: "idle",
    moviesPopular: [],
  },
  now: {
    loading: false,
    error: undefined,
    status: "idle",
    moviesNow: [],
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
    [fetchMoviesPopular.pending]: (state) => {
      state.login.loading = true;
      state.login.status = "loading";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.login.loading = false;
      state.login.status = "failed";
      state.login.error = action.payload;
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.status = "succeeded";
      state.moviesPopular = action.payload.data;
    },
    [fetchMoviesNow.pending]: (state) => {
      state.profile.loading = true;
      state.profile.status = "loading";
    },
    [fetchMoviesNow.rejected]: (state, action) => {
      state.profile.loading = false;
      state.profile.status = "failed";
      state.profile.error = action.payload;
    },
    [fetchMoviesNow.fulfilled]: (state, action) => {
      state.profile.loading = false;
      state.profile.status = "succeeded";
      state.moviesNow = action.payload.data;
    },
  },
});

export const { cleanStateLoading, logOut } = authSlice.actions;

export default authSlice.reducer;
