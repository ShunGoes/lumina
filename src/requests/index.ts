import axios from "axios";

const baseUrl = "https://lumina-wszdbcrgga-uc.a.run.app/api";
// const baseUrl = "http://localhost:8000/api";

const client = axios.create({
  baseURL: baseUrl,
  headers: {
      "x-subject-type": "standard",
      "content-type": "application/json",
  },
  withCredentials: true,
});

export default client;

