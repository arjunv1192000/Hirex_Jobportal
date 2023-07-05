import axios from "axios";
import { baseUrl } from "./constants";
const recruiterapi = axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type": "application/json"
        }
});
recruiterapi.interceptors.request.use(
    config => {
      const accessToken= localStorage.getItem("access_token_recruiter");
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  recruiterapi.interceptors.response.use( 
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        
        window.location.href = "/recruiter/login";
      }
      return Promise.reject(error);
    }
  );
  
export default recruiterapi