import React from "react";

const Card = ({ user, handleDelete, handleEdit }) => {
  return (
    <>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{user.name}</h5>
            <p class="card-text">{user.role}</p>
            <p>{user.number}</p>
            <button onClick={() => handleEdit(user)} class="btn btn-warning">
              Edit
            </button>
            <button
              onClick={() => handleDelete(user._id)}
              class="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
