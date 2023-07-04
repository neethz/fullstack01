import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/welcome/:username' element={<Welcome/>}/> 
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

function Login(){

    const [userName, setUserName] = useState("Neethu");
    const [password, setPassword] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const navigation = useNavigate();

    function handleSubmit(){
        if(userName==='Neethu' && password==='1'){
            setShowSuccess(true);
            setShowError(false);
            navigation(`/welcome/${userName}`)

        }else{
            setShowSuccess(false);
            setShowError(true);
        }
    }

    return(
        <div className="Login">
            <h1 name="title">Login to your account</h1>
            <div>
                <label>User Name : </label>
                <input type="text" name="username" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button type="button" name="loginBtn" onClick={handleSubmit}>Login</button>
            {showSuccess && <div className='AuthSuccess'>Authentication Successful</div>}
            {showError && <div className='AuthFailure'>Authentication Failed</div>}
            
        </div>
    )
}

// function SuccessMessage({showSuccess}){
//     if(showSuccess){
//         return(
//             <div className='AuthSuccess'>Authentication Successful</div>
//         )
//     }
//     return null;

// }

// function ErrorMessage({showError}){
//     if(showError){
//         return(
//             <div className='AuthFailure'>Authentication Failed</div>
//         )
//     }
//     return null;

// }

function Welcome(){
    const {username} = useParams()
    return (
        <div className='Welcome'>
            <h1>Welcome {username}</h1>
            
        </div>
    )
}

function Error(){
    return(
        <div className='Error'>
            <h1>Sorry for the inconvenience caused. </h1>
            <div>Try logging into your account <a href='/login' value='here'>here</a></div>
        </div>
    )
}