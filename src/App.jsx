import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterURL from "./routerURL/RouterURL";
import React from 'react';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <RouterURL></RouterURL>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
