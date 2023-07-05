import axios from "axios";
import { baseUrl } from "./constants";
const chatAPI = axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type": "application/json"
        }
});
export default chatAPI


