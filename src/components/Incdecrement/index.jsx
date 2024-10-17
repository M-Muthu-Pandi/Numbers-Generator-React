import Counter from "./counter";
import { useState } from "react";


const CounterApp = () => {
    let [isVisible, setIsVisible] = useState(false);

    // Toggle visibility function
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <section>
            {!isVisible && (
                <button onClick={toggleVisibility}>Counter Application</button>
            )}
            {isVisible && (
                <div className="counter">
                    <Counter />
                    <button onClick={toggleVisibility}>Close</button>
                </div>
            )}
        </section>
    );
}

export default CounterApp;