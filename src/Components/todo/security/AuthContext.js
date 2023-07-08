import { createContext, useState, useContext } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService } from "../api/AuthenticationApiService";


const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [baToken, setBaToken] = useState(null)

    async function checkAuthentication(userName, password) {
        const baToken = 'Basic ' + window.btoa(userName + ":" + password)
        console.log('Token is ' + baToken)

        try {
            const response = await executeBasicAuthenticationService(baToken)
            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(userName)
                setBaToken(baToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = baToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }


        function logout() {
            setAuthenticated(false)
            setUsername(null)
            setBaToken(null)
        }




        return (
            <AuthContext.Provider value={{ isAuthenticated, checkAuthentication, logout, username, baToken }}>
                {children}
            </AuthContext.Provider>
        )
    }