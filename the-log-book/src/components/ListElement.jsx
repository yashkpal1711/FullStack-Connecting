import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ListElement = ({ user, handleDelete }) => {
  return (
    <div className="elementContainer">
      <p>{user.username} </p>
      <p>{user.password}</p>
      <button onClick={() => handleDelete(user._id)}>Delete</button>
      <Link to={`/update/${user._id}`}>
        <button>update</button>
      </Link>
    </div>
  );
};

export default ListElement;
