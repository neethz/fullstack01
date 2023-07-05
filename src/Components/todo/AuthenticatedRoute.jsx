import { Navigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function AuthenticatedRoute({children}) {
    const auth = useAuth()
    if(auth.isAuthenticated)
        return children

    return <Navigate to="/"/>
}