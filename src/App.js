import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/movies">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
    <div>
<Login></Login>
    </div>
  );
}

export default App;
