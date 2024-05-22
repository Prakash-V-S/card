import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import api from "./config.js";
import Form from "./Components/Form.jsx";
import Card from "./Components/Card.jsx";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [statues, setStatus] = useState('add user');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  // Handing get Operations----------------------

  const getAllUsers = async () => {
    try {
      const response = await api.get("userData/allUsers");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handing Create and Update Operations----------------------

  const createAndEditUser = async () => {
    if (statues == "add user") {
      try {
        await api.post("userData/create", {
          name,
          role,
          number,
        });
        getAllUsers();
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else if (statues == "update") {
      try {
        await api.put(`userData/update/${id}`, {
          name,
          role,
          number,
        });
        getAllUsers();
      } catch (error) {
        console.error("Error Updating user:", error);
      }
    }
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAndEditUser();
  };

  const handleEdit = (user) => {
    setStatus("update");
    setName(user.name);
    setRole(user.role);
    setNumber(user.number);
    setId(user._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`userData/delete/${id}`);
        getAllUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const resetForm = () => {
    setName("");
    setRole("");
    setNumber("");
    setId(null);
    setStatus("add user");
  };

  return (
    <>
      <div className="containerFlex">
        <div className="container">
          <div className="form-container">
            <Form
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              role={role}
              setRole={setRole}
              number={number}
              setNumber={setNumber}
              statues={statues}
            />
          </div>
        </div>
        <div className="users-list">
          <h2 style={{ margin: "40px" }}>Users</h2>
          <div class="row">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <Card
                  key={user._id}
                  user={user}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <li>No users available</li>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
