import React, { useState } from "react";
import Alessauro from "assets/images/alessauro.png";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "services/api";
import { login } from "services/auth";
import styles from "./Login.module.scss";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async e => {
    setIsLoading(true);
    e.preventDefault();
    if (!email || !password) {
      alert("Preencha corretamente os campos!");
      setIsLoading(false);
      return;
    }
    try {
      const response = await api.post("/auth/jwt/create/", { email, password });
      login(response.data.access, response.data.refresh);
      setIsLoading(false);
      history.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
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
          {isLoading ? (
            <Spinner
              as="div"
              animation="border"
              size="md"
              role="status"
              aria-hidden="true"
              variant="success"
            />
          ) : (
            <Button variant="success" type="submit" size="lg">
              Entrar
            </Button>
          )}
          {isLoading ? "" : <Link to="/reset-password">Esqueci a senha</Link>}
        </form>
      </div>
    </div>
  );
};

export default Login;
