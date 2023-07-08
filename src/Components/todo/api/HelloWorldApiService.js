import { useAuth } from "../security/AuthContext";
import { apiClient } from "./ApiClient";


export const retrieveHelloWorld = () => apiClient.get('http://localhost:8080/hello-world',
    {
        headers: {
            Authorization: 'Basic TmVldGh1OjE='
        }
    })
export const retrieveHelloWorldBean = () => apiClient.get('http://localhost:8080/hello-world-bean')
export const retrieveHelloWorldPath = (username) => apiClient.get(`http://localhost:8080/hello-world/path-variable/${username}`)



