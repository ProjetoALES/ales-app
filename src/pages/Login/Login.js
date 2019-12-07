import React, { useState } from "react";
import Alessauro from "assets/images/alessauro.png";
import { Form, Button } from "react-bootstrap";
import api from "services/api";
import { login } from "services/auth";
import styles from "./Login.module.scss";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async e => {
    e.preventDefault();
    if (!email || !password) {
      alert("Preencha corretamente os campos!");
      return;
    }
    try {
      const response = await api.post("/auth/jwt/create/", { email, password });
      login(response.data.access, response.data.refresh);
      history.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div>
          <img src={Alessauro} width="110" height="120" alt="ales-mascote" />
        </div>
        <form className={styles.formContainer} onSubmit={submitLogin}>
          <div className={styles.formGroup}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.formGroup}>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button variant="success" type="submit" size="lg">
            Entrar
          </Button>
          <div>
            <a href="/reset-password">Esqueci a senha</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
