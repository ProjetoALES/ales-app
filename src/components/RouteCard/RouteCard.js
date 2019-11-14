import React from "react";
import styles from "./RouteCard.module.scss";
import CarIcon from "../../assets/icons/car.svg";

const RouteCard = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.rowTitle}>
        <img src={CarIcon} height="20" width="20" />
        <h6>Via Dr. Shigeo Mori</h6>
      </div>
      <div className={styles.infoContainer}>
        <h6>12 min</h6>
        <h6>4,7km</h6>
      </div>
    </div>
    <button type="button">Detalhes</button>
  </div>
);

export default RouteCard;
