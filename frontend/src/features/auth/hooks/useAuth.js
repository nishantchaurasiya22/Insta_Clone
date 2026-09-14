import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { loginAPI, registerAPI, checkAuthAPI } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, SetUser, loading, SetLoading } = context


    const handleLogin = async (identifier, password) => {
        SetLoading(true)
        const response = await loginAPI(identifier, password)
        SetUser(response?.data)
      
        SetLoading(false)
    }

    const handleRegister = async ({ user_name, email, password }) => {
        SetLoading(true)
        const response = await registerAPI(user_name, email, password)
        SetUser(response.user)
        SetLoading(false)
    }

    return {
        user, loading, handleLogin, handleRegister
    }
}