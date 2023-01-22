import axios from "axios";

const request = axios;

request.defaults.baseURL = process.env.VUE_APP_API_URL;
request.defaults.xsrfCookieName = "XSRF-TOKEN";
request.defaults.xsrfHeaderName = "X-XSRF-TOKEN";

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.setContentType("application/json");
    config.headers["withCredentials"] = "true";
    config.headers.Authorization = `Bearer ${token}`;

    // Add your request interceptors here
    // Example: config.headers.Authorization = 'Bearer YOUR_TOKEN';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // Add your response interceptors here
    return response;
  },
  (error) => {
    // Example: handle unauthorized errors
    if (error.response.status === 401) {
      // redirect to login page
    }
    return Promise.reject(error);
  }
);

export default request;
