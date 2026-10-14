import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import './Loader.css';
import {lazy,Suspense} from 'react';
const Login=lazy(()=> import('./components/Login'));
const Dashboard=lazy(()=> import('./components/Dashboard'));
const AddUser=lazy(()=> import('./components/AddUser'));
const EditUser=lazy(()=> import('./components/EditUser'));

const API_URL = "http://localhost:5000/users";

function App() {
  return(
    <Suspense
    fallback={
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    }
  >
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/addUser" element={<AddUser/>}/>
      <Route path="/edit-user/:id" element={<EditUser/>}/>
    </Routes>
    </Suspense>
  )
  // const [users, setUsers] = useState([]);
  // const [editingUser, setEditingUser] = useState(null);
  // const [loading, setLoading] = useState(false);

  // // READ
  // const fetchUsers = async () => {
  //   try {
  //     setLoading(true);

  //     const response = await axios.get(API_URL);

  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to fetch users");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // // CREATE
  // const addUser = async (userData) => {
  //   try {
  //     const response = await axios.post(API_URL, userData);

  //     setUsers((prev) => [response.data, ...prev]);

  //     alert("User added successfully");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to add user");
  //   }
  // };

  // // UPDATE
  // const updateUser = async (userData) => {
  //   try {
  //     const response = await axios.put(
  //       `${API_URL}/${editingUser._id}`,
  //       userData
  //     );

  //     setUsers((prev) =>
  //       prev.map((user) =>
  //         user._id === editingUser._id
  //           ? response.data
  //           : user
  //       )
  //     );

  //     setEditingUser(null);

  //     alert("User updated successfully");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to update user");
  //   }
  // };

  // // DELETE
  // const deleteUser = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this user?"
  //   );

  //   if (!confirmDelete) return;

  //   try {
  //     await axios.delete(`${API_URL}/${id}`);

  //     setUsers((prev) =>
  //       prev.filter((user) => user._id !== id)
  //     );

  //     alert("User deleted successfully");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to delete user");
  //   }
  // };

  // return (
  //   <div className="app">
  //     <div className="container">

  //       <h1>MERN CRUD Application</h1>

  //       <UserForm
  //         onAddUser={addUser}
  //         onUpdateUser={updateUser}
  //         editingUser={editingUser}
  //         onCancelEdit={() => setEditingUser(null)}
  //       />

  //       <UserList
  //         users={users}
  //         loading={loading}
  //         onEdit={setEditingUser}
  //         onDelete={deleteUser}
  //       />

  //     </div>
  //   </div>
  
}

export default App;
