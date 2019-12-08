import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import api from "services/api";
import { notify } from "helpers";
import styles from "./NewPassword.module.scss";

const NewPassword = ({ history, match }) => {
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitNewPassword = async e => {
    setIsLoading(true);
    e.preventDefault();
    const uid = match.params.uid;
    const token = match.params.token;

    if (!newPassword || !reNewPassword) {
      setIsLoading(false);
      notify("Ops! Parece que você esqueceu de preencher algum campo", "error");
      return;
    }
    if (newPassword !== reNewPassword) {
      setIsLoading(false);
      notify("Eita! As senhas digitadas estão diferentes", "error");
      return;
    }
    try {
      await api.post("/auth/users/reset_password_confirm/", {
        uid,
        token,
        new_password: newPassword,
        re_new_password: reNewPassword
      });
      setIsLoading(false);
      history.push("/new-password-set");
      notify(`Senha alterada com sucesso!`, "success");
    } catch (err) {
      setIsLoading(false);
      notify("Ops! Aconteceu algum erro", "error");
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

export default NewPassword;
