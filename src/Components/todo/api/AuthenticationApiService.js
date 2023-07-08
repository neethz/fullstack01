import { apiClient } from "./ApiClient";


export const executeBasicAuthenticationService = (token)=> apiClient.get(`/basic-auth`, {
    headers:{
        Authorization: token
    }
})