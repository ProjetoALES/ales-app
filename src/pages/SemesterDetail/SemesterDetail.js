import React, { useState, useEffect } from "react";

import api from "services/api";
import { notify } from "helpers";
import * as moment from "moment";

import { Button, Spinner, Modal } from "react-bootstrap";
import styles from "./SemesterDetail.module.scss";

const SemesterDetail = ({ match, history }) => {
  const [semester, setSemester] = useState({
    name: match.params.name,
    start: "",
    end: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);
  const showModal = () => setModal(true);

  useEffect(() => {
    const fetchSemester = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/semesters/${semester.name}/`);
        setSemester({
          name: response.data.name,
          start: moment(response.data.start).format("DD/MM/YYYY"),
          end: moment(response.data.end).format("DD/MM/YYYY")
        });
      } catch (error) {
        notify("Ops! Houve algum erro nos dados desse semestre", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSemester();
  }, []);

  const deleteSemester = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/semesters/${semester.name}/`);
      notify("Semestre deletado!", "success");
      history.push("/semesters/");
    } catch (error) {
      notify("Ops! Houve algum erro na hora de deletar este semestre", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDeleteModal = (
    <Modal show={modal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{`Deletar mesmo ${semester.name}?`}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={deleteSemester}>
          Deletar
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const spinnerContainer = (
    <div className={styles.spinnerContainer}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  return isLoading ? (
    spinnerContainer
  ) : (
    <div className={styles.semesterDetailContainer}>
      {confirmDeleteModal}
      <div className={styles.titleContainer}>
        <h3>Semestre</h3>
        <h4>{semester.name}</h4>
      </div>
      <div className={styles.semesterInfoContainer}>
        <div className={styles.infoContainer}>
          <h5>Início</h5>
          <span>{semester.start}</span>
        </div>
        <div className={styles.infoContainer}>
          <h5>Fim</h5>
          <span>{semester.end}</span>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.actionButtonsContainer}>
          <Button type="button" variant="success">
            Editar
          </Button>
          <Button type="button" variant="danger" onClick={() => showModal()}>
            Deletar
          </Button>
        </div>
        <Button
          type="button"
          variant="primary"
          onClick={() => history.push("/semesters/")}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default SemesterDetail;
