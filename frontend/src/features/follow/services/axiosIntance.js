import axios from "axios";
const axiosInstance=axios.create({
    baseURL:"http://localhost:8000/follow",
    withCredentials:true
})

export default axiosInstance


