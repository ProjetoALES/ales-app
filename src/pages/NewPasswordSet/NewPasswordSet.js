import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NewPasswordSet.module.scss";

const NewPasswordSet = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h3>Senha Redefinida</h3>
    </div>
    <div className={styles.descriptionContainer}>
      Sua senha foi redefinida com sucesso. Agora você já pode entrar no nosso
      site com a nova senha \o/
    </div>
    <Link to="/login">
      <Button variant="success" size="lg">
        Entrar
      </Button>
    </Link>
  </div>
);

export default NewPasswordSet;
