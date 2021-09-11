import "./App.css";
import Navabar from "./components/Navabar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./components/Button";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Button />
      </Router>
    </>
  );
}

export default App;
