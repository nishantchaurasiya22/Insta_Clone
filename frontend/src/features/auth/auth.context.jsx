import { createContext, useEffect, useState } from "react"
import { checkAuthAPI } from "./services/auth.api"

export const AuthContext=createContext()
export const AuthProvider=({children})=>{
    const[user,SetUser]=useState(null)
    const[loading,SetLoading]=useState(true)
   useEffect(() => {
    const verifyUser = async () => {
        try {
            const response = await checkAuthAPI()
            SetUser(response)
        } catch (error) {
            SetUser(null)
        } finally {
            SetLoading(false)
        }
    }
    verifyUser()
}, [])
    return(
        <AuthContext.Provider value={{user,SetUser,loading,SetLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
