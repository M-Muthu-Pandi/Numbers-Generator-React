import { useState } from "react";
import Random from "./random";

const RandomNumber = () => {
    let [isVisible, setIsVisible] = useState(false);

    // Toggle visibility function
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <section>
            {!isVisible && (
                <button onClick={toggleVisibility}>Random Number Generator</button>
            )}
            {isVisible && (
                <div className="random">
                    <Random />
                    <button onClick={toggleVisibility}>Close</button>
                </div>
            )}
        </section>
    );
}

export default RandomNumber;