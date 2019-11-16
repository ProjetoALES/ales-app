import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";

const Landing = () => (
  <div className={styles.mainContainer}>
    <Container className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Projeto Além da Escola</h1>
        <h3 className={styles.subTitle}>
          Aulas extracurriculares aos finais de semana!
        </h3>
        <h3 className={styles.subTitle}>e de graça \o/</h3>
        <Link to="/simulate-courses">
          <Button size="lg" variant="warning">
            <span>Nossas Matérias!</span>
          </Button>
        </Link>
        <Link to="/#contact">
          <Button size="lg" variant="outline-warning">
            Contato
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);

export default Landing;
