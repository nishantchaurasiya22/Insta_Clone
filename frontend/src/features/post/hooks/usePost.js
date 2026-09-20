import { useContext } from "react";
import { PostContext } from "../post.context";
import { createPostAPI, deletePostAPI, getFeedAPI, getPostAPI, getPostsAPI } from "../services/post.api";
export const usePost = () => {
    const context = useContext(PostContext)
    const { post, posts, feed, SetPost, SetPosts, SetFeed, loading, SetLoading } = context

    const handleCreatePost = async (formData) => {
        SetLoading(true)
        try {
            const response = await createPostAPI(formData)
            SetPost(response)
            SetPosts(pre => [response, ...pre])
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        } finally {
            SetLoading(false)
        }
    }

    const handleFeed = async () => {
        SetLoading(true)
        try {
            const res = await getFeedAPI()
            SetFeed(res)
            return { success: true }
        } catch (err) {
             console.log("Feed error:", err)   
            return { success: false, error: err }
        } finally {
            SetLoading(false)
        }
    }

    const handleGetPost = async (id) => {
        SetLoading(true)
        try {
            const res = await getPostAPI(id)
            SetPost(res)
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        } finally {
            SetLoading(false)
        }
    }

    const handleGetPosts = async () => {
        SetLoading(true)
        try {
            const res = await getPostsAPI()
            SetPosts(res)
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        } finally {
            SetLoading(false)
        }
    }

    const handleDelete = async (id) => {
        SetLoading(true)
        try {
            await deletePostAPI(id)
            SetPosts(prev => prev.filter(p => p.id !== id))
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        } finally {
            SetLoading(false)
        }
    }

    return {
        loading, post, posts, feed,
        handleCreatePost, handleFeed, handleGetPost, handleGetPosts, handleDelete
    }
}