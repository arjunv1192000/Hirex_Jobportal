import Axios from "axios";
const instance=Axios.create({
    baseURL:'https://hirex.social/service',
    headers:{
    "Content-Type": "application/json"
    }
})
export default instance