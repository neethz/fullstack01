
import './Counter.css'
export default function Counter(){

    function incrementValue(){
        console.log("Value has been incremented");

    }
    return (
        <div className="counter">
            <span className="count">0</span>
            <div>
                <button className="increment" onClick={incrementValue}>+1</button>
            </div>
        </div>
    )
}