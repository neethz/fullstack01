
import { useState } from 'react';
import './Counter.css'
export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementValue(){
        setCount(count+1);

    }

    function reset(){
        setCount(0);
    }
    
    return (
        <div className="counter">
            <span className="count">{count}</span>
            <div>
                <button className="increment" onClick={incrementValue}>+1</button>
            </div>
            <div>
            <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}