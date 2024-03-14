import { useEffect, useState } from "react";
import * as userService from "./services/userService";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Search } from "./components/Search.js";
import "./App.css";
import { UserList } from "./components/Userlist.js";
import { Pagination } from "./components/Pagination.js";
import { Spinner } from "./components/Spinner.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch((err) => {
        console.log("Error" + err);
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdUser = await userService.create(data);

    setUsers((state) => [...state, createdUser]);
  };

  const onDelete = async (userId) => {
    await userService.remove(userId);

    setUsers((state) => state.filter((x) => x._id !== userId));
  };

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          {users && <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} onDelete={onDelete} />}
          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
