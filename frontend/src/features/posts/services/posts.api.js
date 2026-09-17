import axiosInstance from "./axiosInstance";

export const FeedAPI = async () => {
 const res = await axiosInstance.get("/feed")
        return(res.data) 
}
      
 

