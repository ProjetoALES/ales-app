import React from "react";
import styles from "./SimulateCoursesHeader.module.scss";

const SimulateCoursesHeader = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h3>Simulação de Grade</h3>
    </div>
    <div className={styles.descriptionContainer}>
      <p>Experimente adicionar matérias a sua grade!</p>
      <p>
        Se alguma matrícula não for válida ou os horários não baterem, nós te
        avisaremos aqui em baixo.
      </p>
    </div>
  </div>
);

export default SimulateCoursesHeader;
