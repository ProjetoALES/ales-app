import React from "react";
import styles from "./SearchRouteCard.module.scss";
import CircleIcon from "../../assets/icons/circle.svg";
import SwitchIcon from "../../assets/icons/switch.svg";
import LocationIcon from "../../assets/icons/location.svg";

const RouteCard = () => (
  <div className={styles.container}>
    <form className={styles.formContainer}>
      <div className={styles.row}>
        <img src={CircleIcon} alt="circle-icon" />
        <input type="text" placeholder="Seu Endereço" />
      </div>
      <div className={styles.rowIcon}>
        <button type="button">
          <img src={SwitchIcon} alt="switch-icon" height="35" width="35" />
        </button>
      </div>
      <div className={styles.row}>
        <img src={LocationIcon} alt="location-icon" />
        <input type="text" />
      </div>
      <button type="submit" className={styles.submitButton}>
        Procurar
      </button>
    </form>
  </div>
);

export default RouteCard;
