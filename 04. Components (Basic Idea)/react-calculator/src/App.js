import { useState } from "react";
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handlerClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  function clear() {
    setResult("");
  }

  const deleteElement = () => {
    setResult
  }

  return (
    <div className="calculator">
      <input type="text" value={result} disabled/>

      <div className="buttons">

      </div>
    </div>
  );
}

export default App;
