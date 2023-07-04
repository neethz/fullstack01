import { useParams, Link } from "react-router-dom"

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

export default Welcome