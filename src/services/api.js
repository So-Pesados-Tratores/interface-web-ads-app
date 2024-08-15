import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { api };