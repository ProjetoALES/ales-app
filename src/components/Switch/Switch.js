import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({ onChange }) => (
  <label className={styles.switch}>
    <input type="checkbox" onChange={() => onChange()} />
    <span className={`${styles.slider} ${styles.round}`} />
  </label>
);

export default Switch;
