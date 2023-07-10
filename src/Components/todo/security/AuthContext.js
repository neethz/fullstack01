import { createContext, useState, useContext } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";


const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setusername] = useState(null)
    const [token, setToken] = useState(null)

    // async function checkAuthentication(username, password) {
    //     const token = 'Basic ' + window.btoa(username + ":" + password)
    //     console.log('Token is ' + token)

    //     try {
    //         const response = await executeBasicAuthenticationService(token)
    //         if (response.status == 200) {
    //             setAuthenticated(true)
    //             setusername(username)
    //             setToken(token)
    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization = token
    //                     return config
    //                 }
    //             )
    //             return true
    //         } else {
    //             logout()
    //             return false
    //         }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }
    // }

    async function checkAuthentication(username, password) {
       
        console.log('Username and password : '+username+ " "+password)

        try {
            const response = await executeJwtAuthenticationService(username, password)
            if (response.status == 200) {
                console.log('Token received is '+ response.data.token)
                const jwtToken = 'Bearer '+ response.data.token
                setAuthenticated(true)
                setusername(username)
                setToken(jwtToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
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
            setusername(null)
            setToken(null)
        }




        return (
            <AuthContext.Provider value={{ isAuthenticated, checkAuthentication, logout, username, token }}>
                {children}
            </AuthContext.Provider>
        )
    }