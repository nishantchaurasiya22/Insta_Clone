import axiosInstance from "./axiosIntance";

export const sendFollowRequest=async(following_id)=>{
try{
    const response=await axiosInstance.post(`/send_request/${following_id}`)
    return response.data
}catch(err){
    const status=err?.response?.status
    if(status===404){
        console.log("User you are trying to follow does not exist");
    }
    if(status===500){
        console.log("Internal server error");
    }
    throw err
}}

