import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
