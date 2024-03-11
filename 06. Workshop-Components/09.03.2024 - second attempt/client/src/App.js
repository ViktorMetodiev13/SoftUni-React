import { useEffect } from "react";
import * as userService from './services/userService';

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Search } from "./components/Search.js";
import "./App.css";
import { UserList } from "./components/Userlist.js";
import { Pagination } from "./components/Pagination.js";

function App() {
    useEffect(() => {
        userService.getAll()
            .then(users => {

            })
            .catch(err => {
                console.log('Error ' + err);
            })
    }, [])

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList />
          <button className="btn-add btn">Add new user</button>
          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
