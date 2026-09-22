import axiosInstance from "./axiosInstance";
export const getFeedAPI = async () => {
    try {
        const res = await axiosInstance.get("/feed")
        return res.data
    } catch (err) {
        const status = err?.response?.status
        if (status === 500) {
            console.log("Server error");
        }
        throw err
    }
}
export const createPostAPI = async (formData) => {
    try {
        const res = await axiosInstance.post("/create_post", formData);
        return res.data
    } catch (err) {
        const status = err?.response?.status
        if (status === 400) {
            console.log("Bad request:", err.response?.data?.detail);
        } if (status === 500) {
            console.log("Internal server error");

        }
        throw err
    }
}

export const getPostsAPI = async () => {
    try {
        const res = await axiosInstance.get("/get_posts")
        return res.data
    } catch (err) {
        const status = err?.response?.status
        if (status === 500) {
            console.log("Internal server error");

        }
        throw err
    }
}

export const getPostAPI = async (id) => {
    try {
        const res = await axiosInstance.get(`/get_post/${id}`)
        return res.data
    } catch (err) {
        const status = err?.response?.status
        if (status === 404) {
            console.log("Post not found");
        }
        if (status === 500) {
            console.log("Internal server error");

        }
        throw err
    }
}

export const deletePostAPI=async(id)=>{
    try{
        const res=await axiosInstance.delete(`/delete_post/${id}`)
        return res.data
    }catch(err){
        const status=err?.response?.status
        if(status===404){
            console.log("Post not found you wants to delete");
            
        }
        if(status===500){
           console.log("Internal server error");
           
        }
        throw err
    }
}
