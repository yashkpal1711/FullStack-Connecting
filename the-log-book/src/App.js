import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

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

    console.log(data);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* this is Used to debug */}
        {/* <p>{JSON.stringify(form) }</p> */}
        <h3>Username</h3>
        <input type="text" name="username" onChange={handleForm}></input>
        <h3>Password</h3>
        <input type="password" name="password" onChange={handleForm}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
