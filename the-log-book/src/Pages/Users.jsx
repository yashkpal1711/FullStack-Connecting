import React, { useEffect } from "react";
import "../App.css";
import ListContainer from "../components/ListContainer";

const Users = ({ users, setUsers, form, setForm }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    // It is the default property of a form to refresh the page on submit, to prevent it from refreshing and maining the data on consol it is .preventDefault is used.
    e.preventDefault();

    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // the data coming from fetch needs to be processed either By .text() pr by .json()
    //  It is a async function so we have to add await infront of it
    const data = await response.json();

    getUsers();
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/demo/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        getUsers();
        // alert("user deleted successfully");
      } else if (response.status === 404) {
        alert("user not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    // the data coming from fetch needs to be processed either By .text() pr by .json()
    //  It is a async function so we have to add await infront of it
    const data = await response.json();
    setUsers(data);
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* this is Used to debug */}
          {/* <p>{JSON.stringify(form) }</p> */}
          <p>Username</p>
          <input type="text" name="username" onChange={handleForm}></input>
          <p>Password</p>
          <input type="password" name="password" onChange={handleForm}></input>
          <input type="submit"></input>
        </form>
      </div>

      <ListContainer users={users} handleDelete={handleDelete} />
    </div>
  );
};

export default Users;
