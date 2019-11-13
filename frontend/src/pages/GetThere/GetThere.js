import React from "react";
import styles from "./GetThere.module.scss";
import GetThereSection from "./Sections/GetThereSection/GetThereSection";
import SearchRouteSection from "./Sections/SearchRouteSection/SearchRouteSection";

const GetThere = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <h3>Como Chegar</h3>
      </div>
      <div className={styles.description}>
        <p>
          Aqui te ajudamos a escolher o caminho mais fácil pra chegar nas nossas
          aulas! \o/
        </p>
      </div>
    </div>
    <GetThereSection />
    <SearchRouteSection />
  </div>
);

export default GetThere;
