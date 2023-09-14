import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import './App.css';
import { UserContext } from "./components/context/User";
import { useContext } from 'react';

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/"><Welcome/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;