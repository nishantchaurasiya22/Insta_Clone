import { createContext,useEffect,useState } from "react"
import { getPendingRequestAPI } from "./services/follow.api"

export const FollowContext=createContext()
export const FollowProvider=({children})=>{
    const[follower,SetFollower]=useState([])
    const[following,SetFollowing]=useState([])
    const[sendRequest,SetSendRequest]=useState(false)
    const[pending,SetPending]=useState([]) 
      const handleGetPendingRequest = async () => {
        try {
            const response = await getPendingRequestAPI()
            SetPending(response)
            return{
                success:true
            }
        } catch (err) {
            return{success:false,error:err}
        }
    }

    useEffect(() => {
        console.log("bhej di reuest");
        
        handleGetPendingRequest()
    }, [sendRequest])
return(
    <FollowContext.Provider value={{follower,following,pending,SetFollower,handleGetPendingRequest,SetSendRequest,SetFollowing,SetPending}}>
        {children}
    </FollowContext.Provider>
)}