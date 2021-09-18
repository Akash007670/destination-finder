import "./App.css";
import Navabar from "./components/Navabar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./components/Button";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Button />
      </Router>
    </>
  );
}

export default App;
