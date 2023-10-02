import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    // the data coming from fetch needs to be processed either By .text() pr by .json()
    //  It is a async function so we have to add await infront of it
    const data = await response.json();
    setUsers(data);
  };

  const ListElement = ({ user }) => {
    return (
      <div className="elementContainer">
        <p>{user.username} </p>
        <p>{user.password}</p>
      </div>
    );
  };
  const ListContainer = ({ users }) => {
    return (
      <div className="listContainer">
        <div className="heading">
          <h3>Username </h3>
          <h3>Password</h3>
        </div>
        {users.map((user) => {
          return <ListElement user={user} key={user._id} />;
        })}
      </div>
    );
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* this is Used to debug */}
          {/* <p>{JSON.stringify(form) }</p> */}
          <h>Username</h>
          <input type="text" name="username" onChange={handleForm}></input>
          <p>Password</p>
          <input type="password" name="password" onChange={handleForm}></input>
          <input type="submit"></input>
        </form>
      </div>

      <ListContainer users={users} />
    </>
  );
}

export default App;
