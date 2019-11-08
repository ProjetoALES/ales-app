import React from "react";
import styles from "./AboutUs.module.scss";
import UnicampLogo from "../../../../assets/images/unicamp.svg";
import ProecLogo from "../../../../assets/images/proec.svg";

const AboutUs = () => (
  <div className={styles.section}>
    <div className={styles.sectionTitle}>
      <h3>Sobre Nós</h3>
    </div>
    <div className={styles.sectionContainer}>
      <div className={styles.subSection}>
        <div className={styles.subSectionDescription}>
          <span>+ 500 alunos</span>
          <span>+ 25 matérias diferentes</span>
          <span>+ 30 escolas de Campinas</span>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subSectionTitle}>
          <h5>Apoiado por:</h5>
        </div>
        <div className={styles.subSectionPartnership}>
          <img src={ProecLogo} width="100" height="100" />
          <img src={UnicampLogo} width="50" height="50" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
