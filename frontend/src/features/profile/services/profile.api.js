import axiosInstance from "./axiosInstance";


export const getFeedAPI=async()=>{
    try{
        const res=await axiosInstance.get("/feed")
        return res.data
    }catch(err){
        const status=err.response.status
        if (status === 401) {
            console.log("Login required");
        }
        throw err
    }
}

