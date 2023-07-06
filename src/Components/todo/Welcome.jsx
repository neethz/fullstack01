import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { retrieveHelloWorld, retrieveHelloWorldBean, retrieveHelloWorldPath } from "./api/HelloWorldApiService.js"
import { useAuth } from "./security/AuthContext"

function Welcome() {
    // const { username } = useParams()
    const authContext = useAuth()
    const [message, setMessage] = useState(null)


    // console.log(authContext.number)

    function helloF(){
        retrieveHelloWorld()
        .then((response) => {
            console.log(response)
            setMessage(response.data)
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally'))

    }

    function helloB(){
        retrieveHelloWorldBean()
        .then ( (response) => {
            setMessage(response.data.message)
            console.log(response)
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally v2'))
    }

    function helloC(){
        retrieveHelloWorldPath(authContext.username)
        .then ((response) => {
            setMessage(response.data.message)
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('Finally v3'))
    }
    return (
        <div className='Welcome'>
            <h1>Welcome {authContext.username}</h1>
            <div>
                <Link to='/todos'>My Todos</Link>
            </div>
            <div>
               <button className="btn btn-success m-5" onClick={helloF}>Surprise</button>
               <button className="btn btn-primary m-5" onClick={helloB}>Suprise Bean</button>
               <button className="btn btn-warning m-5" onClick={helloC}>Double Suprise Bean</button>
            </div>
            <div className="text text-green">{message}</div>

        </div>
    )
}



export default Welcome