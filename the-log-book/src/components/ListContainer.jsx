import React from "react";
import "../App.css";
import ListElement from "./ListElement";

const ListContainer = ({ users, handleDelete }) => {
  return (
    <div>
      <div className="listContainer">
        <div className="heading">
          <h3>Username </h3>
          <h3>Password</h3>
        </div>
        {users.map((user) => {
          return (
            <ListElement
              user={user}
              key={user._id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListContainer;
