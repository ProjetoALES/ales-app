import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Contact.module.scss";

const Contact = ({ id }) => (
  <div id={id} className={styles.section}>
    <div className={styles.sectionTitle}>
      <h3>Contato</h3>
    </div>
    <div className={styles.sectionDescription}>
      <h3>projetoales@gmail.com</h3>
    </div>
    <form className={styles.formContainer}>
      <div className={styles.formGroup}>
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </div>
      <div className={styles.formGroup}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </div>
      <div className={styles.formGroup}>
        <Form.Label>Mensagem</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </div>
      <Button variant="primary" type="submit" size="lg">
        Enviar
      </Button>
    </form>
  </div>
);

export default Contact;
