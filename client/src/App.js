import { BrowserRouter, Switch, Route,  } from "react-router-dom";
import Welcome from "./components/Welcome";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/"><Welcome/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;