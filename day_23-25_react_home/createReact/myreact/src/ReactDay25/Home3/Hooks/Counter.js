import { useState } from "react";
const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }


    return (
        <div style={{ margin: '10%' }}>
            {counter}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>

        </div>
    )
}
export default Counter;