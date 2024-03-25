import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("engineering");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(age);
    console.log(occupation);
  }

  function onChangeHandlerUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeHandlerAge(e) {
    setAge(e.target.value);
  }

  function onChangeHandlerOccupation(e) {
    setOccupation(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onChangeHandlerUsername}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={onChangeHandlerAge}
          />
        </div>

        <div>
          <label htmlFor="occupation">Occupation</label>
          <select
            name="occupation"
            id="occupation"
            value={occupation}
            onChange={onChangeHandlerOccupation}
          >
            <option value="it">IT</option>
            <option value="engineering">Engineering</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </>
  );
}

export default App;
