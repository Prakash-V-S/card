import React from "react";

const Form = ({
  handleSubmit,
  name,
  setName,
  role,
  setRole,
  number,
  setNumber,
  statues,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label-form" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="label-form" htmlFor="role">
          Role
        </label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="label-form" htmlFor="number">
          Number
        </label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className={
          statues == "add user"
            ? `btn btn-primary form-button`
            : `btn btn-warning form-button`
        }
      >
        {statues}
      </button>
    </form>
  );
};

export default Form;
