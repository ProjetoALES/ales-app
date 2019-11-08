import React from "react";
import styles from "./Badge.module.scss";

const Badge = props => (
  <div className={styles.container}>
    <div className={styles.iconContainer}>
      <img src={props.icon} width="20" height="20" alt="icon" />
    </div>
    <div className={styles.textContainer}>
      <p>{props.text}</p>
    </div>
  </div>
);

export default Badge;
