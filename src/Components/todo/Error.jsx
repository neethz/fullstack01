import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className='Error'>
            <h1>Sorry for the inconvenience caused. </h1>
            <div>Try logging into your account <Link to='/login' value='here'>here</Link></div>
        </div>
    )
}
