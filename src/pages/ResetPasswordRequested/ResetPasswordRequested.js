import React from "react";
import styles from "./ResetPasswordRequested.module.scss";

const ResetPasswordRequested = () => (
  <div className={styles.container}>
    <div className={styles.containerTitle}>
      <h3>Redefinição de senha enviada</h3>
    </div>
    <div className={styles.containerDescription}>
      <p>
        As intruções para a criação de uma nova senha foram enviadas pelo email
        digitado.
      </p>
      <p>
        Caso não tenha recebido o nosso email, verifique na caixa de spam e
        certifique-se que o email foi digitado corretamente na tela anterior
      </p>
    </div>
  </div>
);

export default ResetPasswordRequested;
