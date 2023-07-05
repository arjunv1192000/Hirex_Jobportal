import axios from "axios";
import { baseUrl1 } from "./constants";
const messageAPI = axios.create({
    baseURL:baseUrl1,
    headers:{
        "Content-Type": "application/json"
        }
});
export default messageAPI


