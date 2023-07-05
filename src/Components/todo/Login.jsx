import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useAuth } from "./security/AuthContext";
function Login() {

    const [userName, setUserName] = useState("Neethu");
    const [password, setPassword] = useState("");

    const [showError, setShowError] = useState(false);

    const navigation = useNavigate();
    const auth = useAuth()

    function handleSubmit() {
        if (auth.checkAuthentication(userName, password)) {
            navigation(`/welcome/${userName}`)

        } else {
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
            {showError && <div className='AuthFailure  text-danger'>Authentication Failed</div>}

        </div>
    )
}

export default Login