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
  name: "movies",
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
      state.popular.loading = true;
      state.popular.status = "loading";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.popular.loading = false;
      state.popular.status = "failed";
      state.popular.error = action.payload;
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.popular.loading = false;
      state.popular.status = "succeeded";
      state.popular.moviesPopular = action.payload;
    },
    [fetchMoviesNow.pending]: (state) => {
      state.now.loading = true;
      state.now.status = "loading";
    },
    [fetchMoviesNow.rejected]: (state, action) => {
      state.now.loading = false;
      state.now.status = "failed";
      state.now.error = action.payload;
    },
    [fetchMoviesNow.fulfilled]: (state, action) => {
      state.now.loading = false;
      state.now.status = "succeeded";
      state.now.moviesNow = action.payload;
    },
  },
});

export const { cleanStateLoading, logOut } = authSlice.actions;

export default authSlice.reducer;
