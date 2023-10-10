import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const UpdateUser = () => {
  const [updateUserForm, setUpdateUserForm] = useState({});
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await fetch("http://localhost:8080/demo/getUser/" + id, {
      method: "GET",
    });
    // the data coming from fetch needs to be processed either By .text() pr by .json()
    //  It is a async function so we have to add await infront of it
    const data = await response.json();
    setUser(data);
  };
  const handleUpdateUserForm = (e) => {
    setUpdateUserForm({
      ...updateUserForm,
      [e.target.name]: e.target.value,
    });
  };
  const updateUser = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/demo/updateUser/" + id,
      {
        method: "PUT",
        body: JSON.stringify(updateUserForm),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // the data coming from fetch needs to be processed either By .text() pr by .json()
    //  It is a async function so we have to add await infront of it
    const data = await response.json();
    navigate("/");
  };
  return (
    <>
      <div className="form-container">
        <div>
          <h3>Enter Details to update user Information</h3>
        </div>
        <form onSubmit={updateUser}>
          <p>UserName</p>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            onChange={handleUpdateUserForm}
          ></input>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder={user.password}
            onChange={handleUpdateUserForm}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
