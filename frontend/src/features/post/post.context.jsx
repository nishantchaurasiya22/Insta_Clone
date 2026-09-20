import { createContext, useState } from "react";

export const PostContext = createContext()
export const PostProvider = ({ children }) => {
    const [post, SetPost] = useState(null)
    const [posts, SetPosts] = useState([])
    const [feed,SetFeed]=useState([])
    const[loading,SetLoading]=useState(true)
    return (
    <PostContext.Provider value={{post,posts,loading,feed,SetPost,SetPosts,SetLoading,SetFeed}}>
        {children}
    </PostContext.Provider>)

}