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

    function handleSubmit(){
        if(userName==='Neethu' && password==='1'){
            document.querySelector('.AuthSuccess').style.display = 'block';
            document.querySelector('.AuthFailure').style.display='none';

        }else{
            document.querySelector('.AuthSuccess').style.display = 'none';
            document.querySelector('.AuthFailure').style.display='block';
        }
    }

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
            <button type="button" name="loginBtn" onClick={handleSubmit}>Login</button>
            <div className='AuthSuccess' style={{display:"none"}}>Authentication Successful</div>
            <div className='AuthFailure' style={{display:"none"}}>Authentication Failed</div>
        </div>
    )
}