import { useState } from "react";
import './Counter.css';
import {PropTypes} from 'prop-types';

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounter(by){
        setCount(count+by);
    }

    function decrementCounter(by){
        setCount(count-by);
    }

    function resetValue(){
        setCount(0);
    }

    return (
        <div>
            <span className="count">{count}</span>
            <CounterButton by={1} incrementCounter={incrementCounter}
                                  decrementCounter={decrementCounter}/>
            <CounterButton by={2} incrementCounter={incrementCounter}
                                  decrementCounter={decrementCounter}/>
            <CounterButton by={3} incrementCounter={incrementCounter}
                                  decrementCounter={decrementCounter}/>
            <div>
                <button className="reset" onClick={resetValue}>Reset</button>
            </div>
        </div>
    )
}

function CounterButton({by, incrementCounter , decrementCounter}){

    function incrementFunc(){
        incrementCounter(by)
    }

    function decrementFunc(){
        decrementCounter(by)
    }

    return (
        <div className="counter">
            <div>
                <button className="counterOps increment" onClick={incrementFunc}>+{by}</button>
                <button className="counterOps decrement" onClick={decrementFunc}>-{by}</button>
            </div>
            <div>
            {/* <button className='counterOps reset' onClick={reset}>Reset</button> */}
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by : PropTypes.number

}

CounterButton.defaultProps = {
    by : 1
}