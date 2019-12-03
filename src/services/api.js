import axios from "axios";
import { getToken, getRefreshToken, logout, setNewToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    /* expired token */
    if (error.response.code === "token_not_valid") {
      api
        .post("/token/refresh/", { refresh: getRefreshToken() })
        .then(token => {
          setNewToken(token);
        })
        .catch(err => {
          Promise.reject(err);
        });
    } else {
      logout();
    }
  }
);

export default api;
