import { Navigate, Outlet } from "react-router"
import { useAuth } from "../features/auth/hooks/useAuth"

const ProtectedRoute = () => {
    const { user, loading } = useAuth()
    
    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

    if (!user) {
        return <Navigate to="/" replace />  
    }

    return <Outlet/>
}

export default ProtectedRoute