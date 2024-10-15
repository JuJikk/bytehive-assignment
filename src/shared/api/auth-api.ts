import axios from "axios";
import {redirectLogin} from "../lib/navigation.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getToken = () => localStorage.getItem("user_access_token");

export const apiAuth = axios.create({
  baseURL: BACKEND_URL,
});

apiAuth.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

apiAuth.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response?.status === 401) {
          redirectLogin()
      }
    console.error(error);
    return Promise.reject(error);
  },
);
