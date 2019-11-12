import React from "react";
import styles from "./ResetPasswordCard.module.scss";
import { Form, Button } from "react-bootstrap";

const ResetPasswordCard = () => (
  <div className={styles.container}>
    <div className={styles.cardTitle}>
      <h3>Recuperar senha</h3>
    </div>
    <div className={styles.cardDescription}>
      <p>
        Esqueceu a senha? Digite o email cadastrado pra te ajudarmos a definir
        uma nova :)
      </p>
    </div>
    <form className={styles.formContainer}>
      <div className={styles.formGroup}>
        <Form.Control type="email" placeholder="Email" />
      </div>
      <Button variant="warning" type="submit" size="lg">
        Recuperar senha
      </Button>
    </form>
  </div>
);

export default ResetPasswordCard;
