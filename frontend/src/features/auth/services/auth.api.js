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
        const status = err.response.status

        if (status === 409) {
            console.log("Email or username already exists")
        }
        if (status === 422) {
            console.log("Please enter valid details")
        }
        throw err
    }

}


export const loginAPI = async (identifier, password) => {
    try {
        const res = await axiosInstance.post("/login", {
            identifier,
            password
        })

        return res.data

    } catch (err) {
        const status = err.response.status

        if (status === 401) {
            console.log("Invalid email/phone or password")
        }
        if (status === 422) {
            console.log("Please enter valid details")
        }

        throw err
    }

}
export const logoutAPI = async () => {
    try {
        const res = await axiosInstance.post("/logout")
        return res.data
    } catch (err) {
        const status = err.response?.status

        if (status === 401) {
            console.log("Already logged out or session expired")
        }
        throw err
    }
}
export const checkAuthAPI = async () => {
    try {
        const res = await axiosInstance.get("/me")
        return res.data


    } catch (err) {
        const status = err.response?.status
        if (status === 401) {
            console.log("Login required");
        }
        throw err
    }

}


