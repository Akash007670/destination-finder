import "./App.css";
import Navabar from "./components/Navabar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Button />
      </Router>
    </>
  );
}

export default App;
