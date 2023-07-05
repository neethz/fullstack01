import axios from "axios"
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function Welcome() {
    const { username } = useParams()
    const authContext = useAuth()


    console.log(authContext.number)

    function helloF(){
        axios.get("http://localhost:8080/hello-world")
        .then((response) => {
            console.log(response)
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally'))

    }
    return (
        <div className='Welcome'>
            <h1>Welcome {username}</h1>
            <div>
                <Link to='/todos'>My Todos</Link>
            </div>
            <div>
               <button className="btn btn-success" onClick={helloF}>Hello World!</button>
                
            </div>

        </div>
    )
}



export default Welcome