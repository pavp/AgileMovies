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

export const fetchActors = createAsyncThunk(
  "movies/fetchActors",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.movies.getActors(id);
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
    baseUrl: "",
    movies: [],
    skip: 1,
    endReached: false,
  },
  now: {
    loading: false,
    error: undefined,
    status: "idle",
    baseUrl: "",
    movies: [],
    skip: 1,
    endReached: false,
  },
  actors: {
    loading: false,
    error: undefined,
    status: "idle",
    actors: [],
  },
};

export const authSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    cleanActors: (state) => {
      state.actors.loading = false;
      state.actors.error = "";
      state.actors.status = "idle";
      state.actors.actors = [];
    },
    cleanMovies: (state) => {
      state.popular.loading = false;
      state.popular.error = "";
      state.popular.status = "idle";
      state.popular.baseUrl = "";
      state.popular.movies = [];
      state.popular.skip = 1;
      state.popular.endReached = false;
      state.now.loading = false;
      state.now.error = "";
      state.now.status = "idle";
      state.now.baseUrl = "";
      state.now.movies = [];
      state.now.skip = 1;
      state.now.endReached = false;
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
      state.popular.baseUrl = action.payload.imageBaseUrl;
      state.popular.movies = state.popular.movies.concat(action.payload.data);
      state.popular.skip = state.popular.skip + 1;
      state.popular.endReached = action.payload.length === 0;
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
      state.now.baseUrl = action.payload.imageBaseUrl;
      state.now.movies = state.now.movies.concat(action.payload.data);
      state.now.skip = state.now.skip + 1;
      state.now.endReached = action.payload.length === 0;
    },
    [fetchActors.pending]: (state) => {
      state.actors.loading = true;
      state.actors.status = "loading";
    },
    [fetchActors.rejected]: (state, action) => {
      state.actors.loading = false;
      state.actors.status = "failed";
      state.actors.error = action.payload;
    },
    [fetchActors.fulfilled]: (state, action) => {
      state.actors.loading = false;
      state.actors.status = "succeeded";
      state.actors.actors = action.payload.data;
    },
  },
});

export const { cleanActors, cleanMovies } = authSlice.actions;

export default authSlice.reducer;
