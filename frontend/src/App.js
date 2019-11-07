import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
