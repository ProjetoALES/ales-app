import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <Routes />
        <Footer />
        <ToastContainer
          draggablePercent={30}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </div>
    </Router>
  );
};

export default App;
