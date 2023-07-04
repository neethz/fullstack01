import './TodoApp.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Error'
import Footer from './Footer'
import Header from './Header'
import ListTodos from './ListTodos'
import Login from './Login'
import Logout from './Logout'
import Welcome from './Welcome'
import AuthProvider from './security/AuthContext'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/welcome/:username' element={<Welcome />} />
                        <Route path='/todos' element={<ListTodos />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}













