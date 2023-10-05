import React from "react";
import "../App.css";

const ListElement = ({ user, handleDelete }) => {
  return (
    
    <div>
      <div className="elementContainer">
        <p>{user.username} </p>
        <p>{user.password}</p>
        <button onClick={() => handleDelete(user._id)}>Delete</button>
      </div>
    </div>
  );
};

export default ListElement;
