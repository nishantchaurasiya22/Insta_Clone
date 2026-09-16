import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { loginAPI, registerAPI } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, SetUser, loading, SetLoading } = context

    const handleLogin = async (identifier, password) => {
        SetLoading(true)
        try {
            const response = await loginAPI(identifier, password)
            SetUser(response)
            return { success: true }       
        } catch (error) {
            SetUser(null)
            return { success: false, error } 
        } finally {
            SetLoading(false)
        }
    }

    const handleRegister = async ({ user_name, email, password }) => {
        SetLoading(true)
        try {
            const response = await registerAPI(user_name, email, password)
            SetUser(response)
            return { success: true }
        } catch (error) {
            SetUser(null)
            return { success: false, error }
        } finally {
            SetLoading(false)
        }
    }

    return {
        user, loading, handleLogin, handleRegister
    }
}