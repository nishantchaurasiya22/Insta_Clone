import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { loginAPI, logoutAPI, registerAPI } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, SetUser, loading, SetLoading } = context

    const handleLogin = async (identifier, password) => {
        SetLoading(true)
        try {
            const response = await loginAPI(identifier, password)
            SetUser(response)
            return { success: true }       
        } catch (err) {    
            return { success: false, error:err } 
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
        } catch (err) {     
            return { success: false, error:err }
        } finally {
            SetLoading(false)
        }
    }
  const handleLogout = async () => {
    SetLoading(true)
    try {
        await logoutAPI()
    } catch (err) {
        return{success:false,error:err}
    } finally {
SetUser(null) 
        SetLoading(false)
    }
}
    return {
        user, loading, handleLogin, handleRegister,handleLogout
    }
}