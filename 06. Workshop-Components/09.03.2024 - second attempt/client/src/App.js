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
    email: '',
    phoneNumber: '',
    imageUrl: '',
    address: {
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    }
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
    address: {
        country: '',
        city: '',
        street: '',
        streetNumber: '',
    }
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
        errors.firstName = 'First name should be between 3 and 20 characters long!';
    }

    if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
        errors.lastName = 'Last name should be between 3 and 20 characters long!';
    }

    let matchForEmail = /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

    if (e.target.name === 'email' && matchForEmail === false) {
        errors.email = 'Email is not valid!';
    }

    let matchForPhoneNumber = /^0[1-9]{1}[0-9]{8}$/;

    if (e.target.name === 'phoneNumber' && matchForPhoneNumber === false) {
        errors.phoneNumber = 'Phone number is not valid!';
    }

    let matchForImageUrl = /^https?:\/\/.+/;

    if (e.target.name === 'imageUrl' && matchForImageUrl === false) {
        errors.imageUrl = 'ImageUrl is not valid!';
    }

    if (e.target.name.country === 'country' && value.length < 2) {
        errors.address.country = 'Country should be at least 2 characters long!';
    }

    if (e.target.name.city === 'city' && value.length < 3) {
        errors.address.city = 'City should be at least 3 characters long!';
    }

    if (e.target.name.street === 'street' && value.length < 3) {
        errors.address.street = 'Street should be at least 3 characters long!';
    }

    if (e.target.name.streetNumber === 'streetNumber' && value.length < 1) {
        errors.address.streetNumber = 'Street number should be a positive number!';
    }

    setFormErrors(errors);

    setFormValue(state => ({...state, [e.target.name]: e.target.value}));
  };

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
        errors.firstName = 'First name should be between 3 and 20 characters long!';
    }

    if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
        errors.lastName = 'Last name should be between 3 and 20 characters long!';
    }

    let matchForEmail = /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

    if (e.target.name === 'email' && matchForEmail === false) {
        errors.email = 'Email is not valid!';
    }

    let matchForPhoneNumber = /^0[1-9]{1}[0-9]{8}$/;

    if (e.target.name === 'phoneNumber' && matchForPhoneNumber === false) {
        errors.phoneNumber = 'Phone number is not valid!';
    }

    let matchForImageUrl = /^https?:\/\/.+/;

    if (e.target.name === 'imageUrl' && matchForImageUrl === false) {
        errors.imageUrl = 'ImageUrl is not valid!';
    }

    if (e.target.name.country === 'country' && value.length < 2) {
        errors.address.country = 'Country should be at least 2 characters long!';
    }

    if (e.target.name.city === 'city' && value.length < 3) {
        errors.address.city = 'City should be at least 3 characters long!';
    }

    if (e.target.name.street === 'street' && value.length < 3) {
        errors.address.street = 'Street should be at least 3 characters long!';
    }

    if (e.target.name.streetNumber === 'streetNumber' && value.length < 1) {
        errors.address.streetNumber = 'Street number should be a positive number!';
    }

    setFormErrors(errors);

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
