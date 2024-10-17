import { useState } from "react";

const Random = () => {
    let [num, setNum] = useState("0");

    const randomNum = () => {
        let randomNumbers = Math.floor(Math.random() * 100) + 1;
        setNum(randomNumbers);
    }

    return (
        <>
            <h2>Random Number Generator</h2>
            <h2 className="number">{num}</h2>
            <div>
                <button onClick={randomNum}>Random Number</button>
            </div>
        </>
    );
}

export default Random;