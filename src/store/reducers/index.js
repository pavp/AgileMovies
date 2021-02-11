import { combineReducers } from "@reduxjs/toolkit";

import auth from "../actions/auth";
import movies from "../actions/movies";

export default combineReducers({
  auth,
  movies,
});
