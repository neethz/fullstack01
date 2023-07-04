import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/welcome/:username' element={<Welcome />} />
                    <Route path='/todos' element={<Todos />} />
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    )
}

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

function Welcome() {
    const { username } = useParams()
    return (
        <div className='Welcome'>
            <h1>Welcome {username}</h1>
            <div>
                <Link to='/todos'>My Todos</Link>
            </div>

        </div>
    )
}

function Error() {
    return (
        <div className='Error'>
            <h1>Sorry for the inconvenience caused. </h1>
            <div>Try logging into your account <a href='/login' value='here'>here</a></div>
        </div>
    )
}

function Todos() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
    const todos = [{ id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    { id: 2, description: 'Learn GCP', done: false, targetDate: targetDate },
    { id: 3, description: 'Learn BE', done: false, targetDate: targetDate }]
    return (
        <div className='container Todos'>
            <h1>Your todos are listed below!</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Done?</td>
                        <td>TargetDate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

function Header() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.google.com">NBC</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Hero">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>Footer</div>
        </footer>
    )
}

function Logout() {
    return (
        <div className='Logout'>
            <h2>Thank you! See you soon, again!</h2>
        
        </div>
    )
}
