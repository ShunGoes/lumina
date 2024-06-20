import axios, { InternalAxiosRequestConfig } from "axios";

const baseUrl = "https://lumina-k9dt.onrender.com/api";
// const baseUrl = "http://localhost:8000/api";

const resourceReqInterceptor = (config: InternalAxiosRequestConfig) => {
  const modifiedConfig = { ...config };
  const token = localStorage.getItem("lumina-token");

  if (token && modifiedConfig.headers)
    modifiedConfig.headers.Authorization = `Bearer ${token}`;

  return modifiedConfig;
};

const client = axios.create({
  baseURL: baseUrl,
  headers: {
      "x-subject-type": "standard",
      "content-type": "application/json",
  },
  withCredentials: true,
});

export default client;

client.interceptors.request.use(resourceReqInterceptor);
