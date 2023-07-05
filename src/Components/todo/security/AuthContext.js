import { createContext, useState, useContext } from "react";

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( { children } ){

    const [number, setNumber] = useState(10)
     


    return(
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    )
}