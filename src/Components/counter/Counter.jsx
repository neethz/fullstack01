
import { useState } from 'react';
import './Counter.css'
export default function Counter({by}){

    const [count, setCount] = useState(0);

    function incrementValue(){
        setCount(count + by);

    }

    function decrementValue(){
        setCount(count - by);

    }

    function reset(){
        setCount(0);
    }

    return (
        <div className="counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterOps increment" onClick={incrementValue}>+{by}</button>
                <button className="counterOps decrement" onClick={decrementValue}>-{by}</button>
            </div>
            <div>
            <button className='counterOps reset' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}