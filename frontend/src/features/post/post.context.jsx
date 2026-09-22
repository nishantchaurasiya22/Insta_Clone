import { createContext, useState } from "react";

export const PostContext = createContext()
export const PostProvider = ({ children }) => {
    const [post, SetPost] = useState(null)
    const [posts, SetPosts] = useState([])
    const [feed,SetFeed]=useState([])
    return (
    <PostContext.Provider value={{post,posts,feed,SetPost,SetPosts,SetFeed}}>
        {children}
    </PostContext.Provider>)

}