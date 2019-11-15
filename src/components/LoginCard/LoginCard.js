import React from "react";
import styles from "./LoginCard.module.scss";
import Alessauro from "assets/images/alessauro.png";
import { Form, Button } from "react-bootstrap";

const LoginCard = () => (
  <div className={styles.container}>
    <div>
      <img src={Alessauro} width="110" height="120" alt="ales-mascote" />
    </div>
    <form className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label>
          <input type="radio" name="InputRadio" value="Email" checked />
          Email
        </label>
        <label>
          <input type="radio" name="InputRadio" value="Telefone" />
          Telefone
        </label>
      </div>
      <div className={styles.formGroup}>
        <Form.Control type="email" placeholder="Email" />
      </div>
      <div className={styles.formGroup}>
        <Form.Control type="text" placeholder="Telefone" />
      </div>
      <div className={styles.formGroup}>
        <Form.Control type="password" placeholder="Senha" />
      </div>
      <Button variant="success" type="submit" size="lg">
        Entrar
      </Button>
      <div>
        <a href="/reset-password">Esqueci a senha</a>
      </div>
    </form>
  </div>
);

export default LoginCard;
