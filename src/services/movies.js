import API from "./config";
import { GET_MOVIES_POPULAR, GET_MOVIES_NOW } from "./urls";

const getMoviesPopular = (values) => API.get(GET_MOVIES_POPULAR, values);
const getMoviesNow = (values) => API.get(GET_MOVIES_NOW, values);

export default {
  getMoviesPopular,
  getMoviesNow,
};
