import "./App.css";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterURL from "./routerURL/RouterURL";

function App() {
  const user = true;
  return (
    <Router>
      <div>
        {/* <Route exact path="/">
          {user ? (
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          ) : (
            <Redirect to="register" />
          )}
        </Route> */}

        {/* <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route> */}

        {/* <Route>
          {
            <div>
              <Header />
              <RouterURL></RouterURL>
              <Footer />
            </div>
          }
        </Route> */}

        <Header />
        <RouterURL></RouterURL>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
