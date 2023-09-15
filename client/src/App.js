import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/signup" users={users} setUsers={setUsers}><Signup/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;