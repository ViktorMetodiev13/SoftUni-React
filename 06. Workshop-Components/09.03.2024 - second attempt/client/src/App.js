import { useEffect, useState } from "react";
import * as userService from "./services/userService";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Search } from "./components/Search.js";
import "./App.css";
import { UserList } from "./components/Userlist.js";
import { Pagination } from "./components/Pagination.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(setUsers)
      .catch((err) => {
        console.log("Error" + err);
      });
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          
          <UserList users={users} />

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
