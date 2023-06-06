import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing.jsx";
import Home from "./components/pages/Home.jsx";
import Detail from "./components/pages/Detail.jsx";
import Create from "./components/pages/Create.jsx";
// import pokeball from './images/pokeball.png';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Switch>
          <Route path="/pokemon/create">
            <Create />
          </Route>
          <Route exact path="/pokemon/:id">
            <Detail />
          </Route>
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
