import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import './App.css';
import { UserContext } from "./components/context/User";
import { useContext } from 'react';
import Login from "./components/Login";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route path="/login"><Login/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;