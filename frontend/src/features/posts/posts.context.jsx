import { createContext, useEffect, useState } from "react";
import { FeedAPI } from "./services/posts.api";

export const PostsContext = createContext()
export const PostsProvider = ({ children }) => {
    const [loading, SetLoading] = useState(true)
    const [feed, SetFeed] = useState(null)
    const [posts, SetPosts] = useState(null)
    const getFeed = async () => {
        try {
            SetLoading(true)
            const response = await FeedAPI()
            SetFeed(response)
        } catch (err) {
            SetFeed(null)
        } finally {
            SetLoading(false)
        }
    }

    useEffect(() => {
        getFeed()
    }, [])
    return (
        <PostsContext.Provider value={{ loading, feed, posts, SetLoading, SetFeed, SetPosts }}>
            {children}
        </PostsContext.Provider>
    )
}
