import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import api from "services/api";
import { notify } from "helpers";
import styles from "./ResetPassword.module.scss";

const ResetPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitNewPassword = async e => {
    setIsLoading(true);
    e.preventDefault();
    if (!email) {
      notify("Ops! Parece que você esqueceu de preencher algum campo", "error");
      setIsLoading(false);
      return;
    }
    try {
      await api.post("/auth/users/reset_password/", { email });
      setIsLoading(false);
      history.push("/reset-password-requested");
      notify("Mandamos um email pra você :)", "success");
    } catch (err) {
      setIsLoading(false);
      notify("Ops! Aconteceu algum erro", "error");
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
        {isLoading ? (
          <Spinner
            as="div"
            animation="border"
            size="md"
            role="status"
            aria-hidden="true"
            variant="warning"
          />
        ) : (
          <Button variant="warning" type="submit" size="lg">
            Recuperar senha
          </Button>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
