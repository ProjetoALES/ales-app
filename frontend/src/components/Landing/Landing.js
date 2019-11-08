import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./Landing.module.scss";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const Landing = () => (
  <div className={styles.mainContainer}>
    <Container className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Projeto Além da Escola</h1>
        <h3 className={styles.subTitle}>
          Aulas extracurriculares aos finais de semana!
        </h3>
        <h3 className={styles.subTitle}>e de graça \o/</h3>
        <Button size="lg" variant="warning">
          <span>Nossas Matérias</span>
          <img src={ArrowRight} width="35" height="35" />
        </Button>
        <Button size="lg" variant="outline-warning">
          Contato
        </Button>
      </div>
    </Container>
  </div>
);

export default Landing;
