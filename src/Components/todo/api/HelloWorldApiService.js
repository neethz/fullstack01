import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080'
}) 

export const retrieveHelloWorld = () => apiClient.get('http://localhost:8080/hello-world') 
export const retrieveHelloWorldBean = () => apiClient.get('http://localhost:8080/hello-world-bean') 
export const retrieveHelloWorldPath = (username) => apiClient.get(`http://localhost:8080/hello-world/path-variable/${username}`)



