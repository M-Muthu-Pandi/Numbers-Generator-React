import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);

    // Increment function
    const increment = () => {
        setCount(count + 1);
    }

    // Decrement function
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h2>Counter Web Application</h2>
            <h2 className="number">{count}</h2>
            <div className="plusminus">
                <button onClick={increment}>+</button>
                <button onClick={decrement} className="minus">-</button>
            </div>
        </>
    );
}

export default Counter;