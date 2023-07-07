import Axios from "axios";
const instance=Axios.create({
    baseURL:'https://hirex.social/api/v1/service',
    headers:{
    "Content-Type": "application/json"
    }
})
export default instance