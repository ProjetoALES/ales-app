import React from "react";

import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

const Card = ({ text, color, to }) => {
  return (
    <Link to={to} className={styles.linkContainer}>
      <div className={`${styles.cardContainer} ${styles[color]}`}>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default Card;
