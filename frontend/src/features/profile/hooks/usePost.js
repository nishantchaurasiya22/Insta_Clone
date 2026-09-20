import { useContext } from "react"
import { ProfileContext } from "../profile.context"
import { createPostAPI } from "../services/profile.api"

export const usePost =() => {
    const context = useContext(ProfileContext)
    const { post, SetPost, posts, SetPosts, loading, SetLoading } = context
    const handleCreatePost = async (formData) => {
        try {
            SetLoading(true)
            const response = await createPostAPI(formData);
            SetPost(response);
            SetPosts((prev) => [response, ...prev])
            console.log("crated");
            
            return { success: true };
        } catch (err) { 
            return { success: false,error:err };
        } finally {
            SetLoading(false)
        }
    };
    return {
        post, SetPost, posts, SetPosts, loading, SetLoading,handleCreatePost
    }
}