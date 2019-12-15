import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import styles from "./NewSemester.module.scss";

const NewSemester = ({ history }) => {
  const [name, setName] = useState("");

  return (
    <div className={styles.newSemesterContainer}>
      <h3>Novo Semestre</h3>
      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <Form.Control
            type="text"
            placeholder="Nome"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button type="submit" variant="success">
            Adicionar
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={() => history.push("/semesters")}
          >
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewSemester;
