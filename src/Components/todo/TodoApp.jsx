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

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    function handleSubmit(){
        if(userName==='Neethu' && password==='1'){
            setShowSuccess(true);
            setShowError(false);

        }else{
            setShowSuccess(false);
            setShowError(true);
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
            <SuccessMessage showSuccess={showSuccess}/>
            <ErrorMessage showError={showError}/>
            
        </div>
    )
}

function SuccessMessage({showSuccess}){
    if(showSuccess){
        return(
            <div className='AuthSuccess'>Authentication Successful</div>
        )
    }
    return null;

}

function ErrorMessage({showError}){
    if(showError){
        return(
            <div className='AuthFailure'>Authentication Failed</div>
        )
    }
    return null;

}