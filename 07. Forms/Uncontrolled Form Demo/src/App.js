import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  function onChangeHandler(e) {
    console.log(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const username = data.username;

    console.log(username);
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
            defaultValue={username}
            // onChange={onChangeHandler}
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
