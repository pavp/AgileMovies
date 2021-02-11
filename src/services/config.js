import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://161.35.140.236:9005/api",
});

export default instance;
