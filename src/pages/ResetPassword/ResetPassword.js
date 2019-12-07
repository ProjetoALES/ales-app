import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "services/api";
import styles from "./ResetPassword.module.scss";

const ResetPassword = ({ history }) => {
  const [email, setEmail] = useState("");

  const submitNewPassword = async e => {
    e.preventDefault();
    if (!email) {
      alert("Preencha corretamente os campos!");
      return;
    }
    try {
      await api.post("/auth/users/reset_password/", { email });
      history.push("/reset-password-requested");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
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
      <form className={styles.formContainer} onSubmit={submitNewPassword}>
        <div className={styles.formGroup}>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <Button variant="warning" type="submit" size="lg">
          Recuperar senha
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
