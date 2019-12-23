import React from "react";

import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.scss";

const Loader = ({ animation, variant }) => {
  return (
    <div className={styles.loaderContainer}>
      <Spinner animation={animation} variant={variant} />
    </div>
  );
};

export default Loader;
