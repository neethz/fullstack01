import axios from "axios";

export const retrieveHelloWorld = () => axios.get("http://localhost:8080/hello-world") 
export const retrieveHelloWorldBean = () => axios.get("http://localhost:8080/hello-world-bean") 



