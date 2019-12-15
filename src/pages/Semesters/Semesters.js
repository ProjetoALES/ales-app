import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import api from "services/api";
import { notify } from "helpers";

import Card from "components/Card/Card";
import { Button, Spinner } from "react-bootstrap";
import styles from "./Semesters.module.scss";

const Semesters = ({ history }) => {
  const [semesters, setSemesters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSemesters = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/semesters/");
        setSemesters(response.data);
      } catch (error) {
        notify("Ops! Parece que houve algum erro", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSemesters();
  }, []);

  const semestersList = () => {
    const firstCol = [];
    const secondCol = [];
    semesters.forEach((item, index) => {
      index % 2 === 0 ? firstCol.push(item) : secondCol.push(item);
    });
    return [firstCol, secondCol];
  };

  const spinnerContainer = (
    <div className={styles.spinnerContainer}>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  const color = "blue";

  return (
    <div className={styles.semestersContainer}>
      <h3>Semestres</h3>
      <Button onClick={() => history.push("/new-semester")}>
        Novo Semestre
      </Button>
      {isLoading ? (
        spinnerContainer
      ) : (
        <div className={styles.cardsContainer}>
          <div className={styles.cardsCol}>
            {semestersList()[0].map(item => {
              return (
                <Card
                  text={item.name}
                  color={color}
                  to={`/semesters/${item.name}`}
                  key={item.name}
                />
              );
            })}
          </div>
          <div className={styles.cardsCol}>
            {semestersList()[1].map(item => {
              return (
                <Card
                  text={item.name}
                  color={color}
                  to={`/semesters/${item.name}`}
                  key={item.name}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Semesters);
