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
  const [formValues, setFormValue] = useState({
    firstName: '',
    lastName: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch((err) => {
        console.log("Error " + err);
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

  const formChangeHandler = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
        errors.firstName = 'First name should be between 3 and 20 characters long';
    }

    if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
        errors.lastName = 'Last name should be between 3 and 20 characters long';
    }

    setFormErrors(errors);

    setFormValue(state => ({...state, [e.target.name]: e.target.value}));
  };

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
        errors.firstName = 'First name should be between 3 and 20 characters long';
    }

    if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
        errors.lastName = 'Last name should be between 3 and 20 characters long';
    }

    setFormErrors(errors);
  };

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList 
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onDelete={onDelete}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            formValidate={formValidate}
        />
          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
