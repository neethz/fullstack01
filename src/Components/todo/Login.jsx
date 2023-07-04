import { useNavigate } from "react-router-dom";
import { useState } from 'react'
function Login() {

    const [userName, setUserName] = useState("Neethu");
    const [password, setPassword] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const navigation = useNavigate();

    function handleSubmit() {
        if (userName === 'Neethu' && password === '1') {
            setShowSuccess(true);
            setShowError(false);
            navigation(`/welcome/${userName}`)

        } else {
            setShowSuccess(false);
            setShowError(true);
        }
    }

    return (
        <div className="container Login">
            <h1 name="title">Login to your account</h1>
            <div>
                <label>User Name : </label>
                <input type="text" name="username" value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button type="button" name="loginBtn" onClick={handleSubmit}>Login</button>
            {showSuccess && <div className='AuthSuccess'>Authentication Successful</div>}
            {showError && <div className='AuthFailure'>Authentication Failed</div>}

        </div>
    )
}

export default Login