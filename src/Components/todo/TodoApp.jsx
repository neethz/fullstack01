import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <Login/>

        </div>
    )
}

function Login(){

    const [userName, setUserName] = useState("Neethu");
    const [password, setPassword] = useState("");

    return(
        <div className="Login">
            <span name="title">Login to your account</span>
            <div>
                <label>User Name : </label>
                <input type="text" name="username" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button type="button" name="loginBtn">Login</button>
        </div>
    )
}