import API from "./config";
import { SIGN_IN, PROFILE } from "./urls";

const signIn = (values) => API.post(SIGN_IN, values);
const profile = () => API.get(PROFILE);

export default {
  signIn,
  profile,
};
