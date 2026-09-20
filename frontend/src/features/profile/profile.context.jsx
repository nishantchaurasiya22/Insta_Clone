import { createContext, useEffect, useState } from "react";
import { getFeedAPI } from "./services/profile.api";

export const ProfileContext = createContext()
export const ProfileProvider = ({ children }) => {
    const [feed, SetFeed] = useState(null)
    const [loading, SetLoading] = useState(true)
    const[posts,SetPosts]=useState([])
    const[post,SetPost]=useState(null)
    const getFeed = async () => {
        try {
            const res = await getFeedAPI()
            SetFeed(res)
            
        } catch (err) {
            console.log(err);    
        } finally {
            SetLoading(false)
        }
    }
    useEffect(() => {
        getFeed()
    }, [])

    return(
        <ProfileContext.Provider value={{feed, SetFeed,post,posts,loading,SetLoading,SetPost,SetPosts}} >
           {children}
        </ProfileContext.Provider>
    )

}