import API from "./config";
import { GET_MOVIES_POPULAR, GET_MOVIES_NOW, GET_ACTORS } from "./urls";

const getMoviesPopular = (values) =>
  API.get(GET_MOVIES_POPULAR, { params: values });
const getMoviesNow = (values) => API.get(GET_MOVIES_NOW, { params: values });
const getActors = (id) => API.get(`${GET_ACTORS}/${id}/actors`);

export default {
  getMoviesPopular,
  getMoviesNow,
  getActors,
};
