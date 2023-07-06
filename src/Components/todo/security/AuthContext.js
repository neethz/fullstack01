import { createContext, useState, useContext } from "react";

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( { children } ){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    function checkAuthentication(userName, password){
        if (password === '1') {
            setAuthenticated(true)
            setUsername(userName)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

     


    return(
        <AuthContext.Provider value={ {isAuthenticated , checkAuthentication, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}