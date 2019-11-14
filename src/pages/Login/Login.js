import React from "react";
import styles from "./Login.module.scss";
import LoginCard from "../../components/LoginCard/LoginCard.js";

const Login = () => (
  <div className={styles.container}>
    <LoginCard />
  </div>
);

export default Login;
