import { createContext, useEffect, useState } from "react";
import axiosInstance from "./services/axiosIntance";
export const FollowContext = createContext()
export const FollowProvider = ({ children }) => {
    const[follower,SetFollower]=useState(0)
    const[following,SetFollowing]=useState(0)
    const[request,SetRequest]=useState([])


    const getPendingRequests=async()=>{
        try{
          const response=await axiosInstance.get("/request/pending")
          const pendingIds=response.data.map(user=>user.user_id)
         SetRequest(pendingIds)
        }catch(err){
         console.log(err);
         
        }
    }

    useEffect(()=>{
        getPendingRequests()
    },[])
    return( 
    <FollowContext.Provider value={{follower,following,request,SetFollower,SetFollowing,SetRequest}}>
        {children}
    </FollowContext.Provider>
    )}