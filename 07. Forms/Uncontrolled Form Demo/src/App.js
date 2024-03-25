import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(() => {
    setTimeout(() => {
        setUsername('Gosho');
    }, 3000)
  }, []);

  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue={username}
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
