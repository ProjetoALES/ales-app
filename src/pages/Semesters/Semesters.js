import React from "react";

import Card from "components/Card/Card";
import { Button } from "react-bootstrap";
import styles from "./Semesters.module.scss";

const Semesters = () => {
  const color = "blue";
  return (
    <div className={styles.semestersContainer}>
      <h3>Semestres</h3>
      <Button>Novo Semestre</Button>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsRow}>
          <Card text="1S2020" color={color} />
          <Card text="2S2020" color={color} />
        </div>
        <div className={styles.cardsRow}>
          <Card text="1S2021" color={color} />
          <Card text="2S2021" color={color} />
        </div>
        <div className={styles.cardsRow}>
          <Card text="1S2021" color={color} />
          <Card text="2S2021" color={color} />
        </div>
      </div>
    </div>
  );
};

export default Semesters;
