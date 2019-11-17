import React from "react";
import Switch from "components/Switch/Switch";
import styles from "./CourseCard.module.scss";

const CourseCard = ({ course, onChange }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h6>{course.name}</h6>
      <p>{course.frequency}</p>
    </div>
    <div className={styles.description}>
      <p>{course.description}</p>
    </div>
    <div className={styles.toggleContainer}>
      <Switch onChange={() => onChange(course)} />
      <p>Adicionar Matéria</p>
    </div>
    <div className={styles.nextClass}>
      <p>{`Próxima Aula: ${course.nextClass}`}</p>
    </div>
  </div>
);

export default CourseCard;
