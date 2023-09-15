import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import './App.css';
import { UserContext } from "./components/context/User";
import { useState, useContext } from 'react';
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup sers={users} setUsers={setUsers}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;