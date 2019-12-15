import axios from "axios";
import { getToken, getRefreshToken, logout, setNewToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1"
});

api.interceptors.request.use(config => {
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
    const originalRequest = error.config;
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    /* expired token */
    if (
      error.response.data.code === "token_not_valid" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return new Promise((resolve, reject) => {
        api
          .post("/auth/jwt/refresh/", { refresh: getRefreshToken() })
          .then(response => {
            const token = response.data.access;
            setNewToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return resolve(axios(originalRequest));
          })
          .catch(err => {
            reject(err);
          });
      });
    }
    logout();
  }
);

export default api;
