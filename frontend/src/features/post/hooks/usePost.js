import { useContext } from "react";
import {PostContext } from "../post.context";
import { createPostAPI, deletePostAPI, getFeedAPI, getPostAPI, getPostsAPI } from "../services/post.api";

export const usePost = () => {
    const context = useContext(PostContext)
    const { post, posts, feed, SetPost, SetPosts, SetFeed } = context

    const handleCreatePost = async (formData) => {
        try {
            const response = await createPostAPI(formData)
            SetPost(response)
            SetPosts(prev => [response, ...prev])
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        }
    }

    const handleFeed = async () => {
        try {
            const res = await getFeedAPI()
            SetFeed(res)
            return { success: true }
        } catch (err) {
            console.log("Feed error:", err)
            return { success: false, error: err }
        }
    }

    const handleGetPost = async (id) => {
        try {
            const res = await getPostAPI(id)
            SetPost(res)
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        }
    }

    const handleGetPosts = async () => {
        try {
            const res = await getPostsAPI()
            SetPosts(res)
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        }
    }

    const handleDelete = async (id) => {
        try {
            await deletePostAPI(id)
            SetPosts(prev => prev.filter(p => p.id !== id))
            return { success: true }
        } catch (err) {
            return { success: false, error: err }
        }
    }

    return {
        post, posts, feed,
        handleCreatePost, handleFeed, handleGetPost, handleGetPosts, handleDelete
    }
}