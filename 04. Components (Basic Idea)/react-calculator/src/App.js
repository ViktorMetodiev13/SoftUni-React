import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handlerClick = (e) => {
    setResult(result.concat(e.target.id));
    console.log((result.concat(e.target.id)));
  };

  function clear() {
    setResult("");
  }

  const deleteElement = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Invalid");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />

      <div className="buttons">
        <button className="operator" onClick={clear}>AC</button>
        <button className="operator" onClick={deleteElement}>DE</button>
        <button id="." className="operator" onClick={handlerClick}>.</button>
        <button id="/" className="operator" onClick={handlerClick}>/</button>

        <button id="7" className="number" onClick={handlerClick}>7</button>
        <button id="8" className="number" onClick={handlerClick}>8</button>
        <button id="9" className="number" onClick={handlerClick}>9</button>
        <button id="*" className="operator" onClick={handlerClick}>X</button>

        <button id="4" className="number" onClick={handlerClick}>4</button>
        <button id="5" className="number" onClick={handlerClick}>5</button>
        <button id="6" className="number" onClick={handlerClick}>6</button>
        <button id="-" className="operator" onClick={handlerClick}>-</button>

        <button id="1" className="number" onClick={handlerClick}>1</button>
        <button id="2" className="number" onClick={handlerClick}>2</button>
        <button id="3" className="number" onClick={handlerClick}>3</button>
        <button id="+" className="operator" onClick={handlerClick}>+</button>

        <button id="00" className="number" onClick={handlerClick}>00</button>
        <button id="0" className="number" onClick={handlerClick}>0</button>
        <button id="=" className="operator col-span-2" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
