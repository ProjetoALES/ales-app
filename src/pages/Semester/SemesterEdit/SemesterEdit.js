import React, { useState, useEffect } from "react";

import api from "services/api";
import { notify } from "helpers";
import * as moment from "moment";

import InputDate from "components/InputDate/InputDate";
import { Form, Button, Spinner } from "react-bootstrap";

import styles from "./SemesterEdit.module.scss";

const SemesterEdit = ({ history, match }) => {
  const [name, setName] = useState(match.params.name);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const verifyDate = date => {
    const [day, month, year] = date.toString().split("/");
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

  useEffect(() => {
    setIsLoading(true);
    const fetchSemester = async () => {
      try {
        const response = await api.get(`/semesters/${name}/`);
        setName(response.data.name);
        setStart(moment(response.data.start).format("DD/MM/YYYY"));
        setEnd(moment(response.data.end).format("DD/MM/YYYY"));
      } catch (error) {
        notify("Ops! Parece que houve algum erro com esse semestre", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSemester();
  }, []);

  const submitEditSemester = async e => {
    e.preventDefault();
    if (!start || !end) {
      notify("Ops! Está faltando preencher algum campo", "error");
      return;
    }
    if (!verifyDate(start) || !verifyDate(end)) {
      notify("Ops! Talvez alguma data esteja errada", "error");
      return;
    }
    try {
      await api.put(`/semesters/${name}/`, {
        name,
        start,
        end
      });
      history.push("/semesters");
      notify("Semestre editado com sucesso!", "success");
    } catch (error) {
      notify("Ops! Parece que houve algum problema", "error");
    }
  };

  const spinnerContainer = (
    <div className={styles.spinnerContainer}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  return (
    <div className={styles.newSemesterContainer}>
      {isLoading ? (
        spinnerContainer
      ) : (
        <>
          <h3>Editar Semestre</h3>
          <form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={name}
                maxLength={6}
                onChange={e => setName(e.target.value)}
                disabled
              />
            </div>
            <div className={styles.inputsContainer}>
              <InputDate
                label="Início"
                value={start}
                onChange={e => setStart(e.target.value)}
                defaultValue={start}
              />
              <InputDate
                label="Fim"
                value={end}
                onChange={e => setEnd(e.target.value)}
                defaultValue={end}
              />
            </div>
            <div className={styles.buttonsContainer}>
              <Button
                type="submit"
                variant="success"
                onClick={e => submitEditSemester(e)}
              >
                Salvar
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={() => history.push(`/semesters/${name}/`)}
              >
                Voltar
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default SemesterEdit;
