import { useState } from "react"

export default function Timer(){
    const [timer, setTimer] = useState(0)
    setInterval(()=> setTimer(timer+2),2000)
    return(
        <div className="container">
            <div className="timer">{timer}</div>

        </div>
    )
}