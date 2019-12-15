import React, { useState, useEffect } from "react";

import semestersService from "services/semestersService";
import { notify } from "helpers";

import Card from "components/Card/Card";
import { Button } from "react-bootstrap";
import styles from "./Semesters.module.scss";

const Semesters = () => {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        const { data } = await semestersService.list();
        setSemesters(data);
      } catch (error) {
        notify("Ops! Parece que houve algum erro", "error");
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

  const color = "blue";

  return (
    <div className={styles.semestersContainer}>
      <h3>Semestres</h3>
      <Button>Novo Semestre</Button>
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
    </div>
  );
};

export default Semesters;
