import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [age, setAge] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    console.log(username);
    console.log(age);
  }

  function onChangeHandlerUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeHandlerAge(e) {
    setAge(e.target.value);
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
          <input type="submit" value="Send" />
        </div>
      </form>
    </>
  );
}

export default App;
