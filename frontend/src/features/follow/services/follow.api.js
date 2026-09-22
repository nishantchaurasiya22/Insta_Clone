import axios from "axios"
import axiosInstance from "./axiosInstance"


export const sendFollowRequestAPI = async (id) => {
    try {
        const res = await axiosInstance.post(`/send_request/${id}`)
        return res.data
    } catch (err) {
        const status = err?.response?.status

        if (status === 409) {
            console.log("You already follow this user (or request already sent)")
        } else if (status === 400) {
            console.log("You cannot follow yourself")
        } else if (status === 404) {
            console.log("The user you are trying to follow does not exist")
        }
         if(status === 500) {
            console.log("Internal server error")
        } 

        throw err  
    }
}

export const getPendingRequestAPI=async()=>{
    try{
        const res=await axiosInstance.get("/request/pending")
        return res.data
    }catch(err){
        const status=err?.response?.status
        if(status === 500) {
            console.log("Internal server error")
        } 
        throw err}
}