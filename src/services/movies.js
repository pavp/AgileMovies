import API from "./config";
import { GET_MOVIES_POPULAR, GET_MOVIES_NOW } from "./urls";

const getMoviesPopular = (values) =>
  API.get(GET_MOVIES_POPULAR, { params: values });
const getMoviesNow = (values) => API.get(GET_MOVIES_NOW, { params: values });

export default {
  getMoviesPopular,
  getMoviesNow,
};
