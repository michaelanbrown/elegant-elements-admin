import { BrowserRouter, Switch, Route,  } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import './App.css';

function App() {
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