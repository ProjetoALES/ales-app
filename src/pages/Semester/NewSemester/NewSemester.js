import React, { useState, useEffect } from "react";

import api from "services/api";
import { notify } from "helpers";

import InputDate from "components/InputDate/InputDate";
import { Form, Button } from "react-bootstrap";

import styles from "./NewSemester.module.scss";

const NewSemester = ({ history }) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("pt-br")
  );
  const [endDate, setEndDate] = useState("");

  const verifyDate = date => {
    const [day, month, year] = date.split("/");
    if (
      parseInt(day, 10) < 1 ||
      parseInt(day, 10) > 31 ||
      parseInt(month, 10) < 1 ||
      parseInt(month, 10) > 12 ||
      parseInt(year, 10) < 2019
    ) {
      return false;
    }
    return true;
  };

  const submitNewSemester = async e => {
    e.preventDefault();
    if (!name || !startDate || !endDate) {
      notify("Ops! Está faltando preencher algum campo", "error");
      return;
    }
    if (!verifyDate(startDate) || !verifyDate(endDate)) {
      notify("Ops! Talvez alguma data esteja errada", "error");
      return;
    }
    try {
      await api.post("/semesters/", { name, start: startDate, end: endDate });
      history.push("/semesters");
      notify("Semestre criado com sucesso!", "success");
    } catch (error) {
      notify("Ops! Parece que houve algum problema", "error");
    }
  };

  return (
    <div className={styles.newSemesterContainer}>
      <h3>Novo Semestre</h3>
      <form className={styles.formContainer}>
        <div className={styles.formGroup}>
          <Form.Control
            type="text"
            placeholder="Nome"
            maxLength={6}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputsContainer}>
          <InputDate
            label="Início"
            onChange={e => setStartDate(e.target.value)}
            defaultValue={startDate}
          />
          <InputDate label="Fim" onChange={e => setEndDate(e.target.value)} />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            type="submit"
            variant="success"
            onClick={e => submitNewSemester(e)}
          >
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
