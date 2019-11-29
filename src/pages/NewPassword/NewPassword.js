import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./NewPassword.module.scss";

const NewPassword = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h3>Nova Senha</h3>
    </div>
    <div className={styles.descriptionContainer}>
      <p>Defina uma nova senha pra poder entrar no nosso site :)</p>
    </div>
    <form className={styles.newPasswordForm}>
      <div className={styles.formGroup}>
        <Form.Control type="password" placeholder="Nova Senha" />
      </div>
      <div className={styles.formGroup}>
        <Form.Control type="password" placeholder="Nova Senha" />
      </div>
      <Button variant="warning" type="submit" size="lg">
        Redefinir Senha
      </Button>
    </form>
  </div>
);

export default NewPassword;
