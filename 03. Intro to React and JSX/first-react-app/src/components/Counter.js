import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const onButtonClick = () => {
        setCounter((oldCounter) => oldCounter + 1);
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onButtonClick}>+</button>
        </div>
    )
}

export default Counter;