import axiosInstance from "./axiosInstance"
export const registerAPI = async (userName, email, password) => {
    try {
        const res = await axiosInstance.post("/register", {
            user_name: userName,
            email: email,
            password: password
        })
        return res.data

    } catch (err) {
        console.error("Register failed:", err.response?.data || err.message)
        throw err

    }
}

export const loginAPI = async(identifier, password) => {
    try {
        const res = await axiosInstance.post("/login", {
            identifier,
            password
        })
        return res

    } catch (err) {
         console.error("Login failed:", err.response?.data || err.message)
        throw err

    }
}

export const checkAuthAPI =async() => {
    try {
        const res = await axiosInstance.get("/me")
        return res.data

    } catch (err) {
        throw err
    }
}


