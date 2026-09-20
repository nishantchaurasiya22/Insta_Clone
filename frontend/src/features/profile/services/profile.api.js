import axiosInstance from "./axiosInstance";


export const getFeedAPI=async()=>{
    try{
        const res=await axiosInstance.get("/feed")
        return res.data
    }catch(err){
        const status=err.response.status
        if (status === 500) {
            console.log("Server erro");
        }
        throw err
    }
}
export const createPostAPI = async (formData) => {
    try {
        const res = await axiosInstance.post("/create_post",formData);
        return res.data
    } catch (err) {
        const status = err.response.status
        if (status === 400) {
            console.log("Bad request:", err.response?.data?.detail);
        }if (status === 500) {
            console.log("Server error");  
        throw err
    }}
}