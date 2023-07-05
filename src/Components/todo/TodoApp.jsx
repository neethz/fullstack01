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
import Timer from './Timer'
import AuthenticatedRoute from './AuthenticatedRoute'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <Welcome />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodos />
                            </AuthenticatedRoute>} />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <Logout />
                            </AuthenticatedRoute>} />
                        <Route path='/timer' element={<Timer />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}













