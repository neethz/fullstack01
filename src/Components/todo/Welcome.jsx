import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { AuthContext } from "./security/AuthContext"

function Welcome() {
    const { username } = useParams()
    const authContext = useContext(AuthContext)
    console.log(authContext.number)
    return (
        <div className='Welcome'>
            <h1>Welcome {username}</h1>
            <div>
                <Link to='/todos'>My Todos</Link>
            </div>

        </div>
    )
}

export default Welcome