import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar";
import Landing from "./components/Landing.jsx";
import Home from "./components/pages/Home.jsx";
import Detail from "./components/pages/Detail.jsx";
import Create from "./components/pages/Create.jsx";
// import pokeball from './images/pokeball.png';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div className="app-navbar">{pathname !== "/" && <NavBar />}</div>
      {pathname !== "/" && <SideBar />}
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
