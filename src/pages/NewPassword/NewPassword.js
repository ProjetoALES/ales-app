import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "services/api";
import styles from "./NewPassword.module.scss";

const NewPassword = ({ history, match }) => {
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const submitNewPassword = async e => {
    e.preventDefault();
    const uid = match.params.uid;
    const token = match.params.token;

    if (!newPassword || !reNewPassword) {
      alert("Preencha corretamente os campos!");
      return;
    }
    if (newPassword !== reNewPassword) {
      alert("As senhas digitadas estão diferentes");
      return;
    }
    try {
      await api.post("/auth/users/reset_password_confirm/", {
        uid,
        token,
        new_password: newPassword,
        re_new_password: reNewPassword
      });
      history.push("/new-password-set");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Nova Senha</h3>
      </div>
      <div className={styles.descriptionContainer}>
        <p>Defina uma nova senha pra poder entrar no nosso site :)</p>
      </div>
      <form className={styles.newPasswordForm} onSubmit={submitNewPassword}>
        <div className={styles.formGroup}>
          <Form.Control
            type="password"
            placeholder="Nova Senha"
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <Form.Control
            type="password"
            placeholder="Nova Senha"
            onChange={e => setReNewPassword(e.target.value)}
          />
        </div>
        <Button variant="warning" type="submit" size="lg">
          Redefinir Senha
        </Button>
      </form>
    </div>
  );
};

export default NewPassword;
