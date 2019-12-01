import React from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ text, icon, to, color }) => {
  const className = [styles.container, styles[color]].join(" ");
  return (
    <Link to={to} className={styles.linkContainer}>
      <div className={className}>
        <div className={styles.titleContainer}>
          <span>{text}</span>
        </div>
        <div className={styles.iconContainer}>
          <img src={icon} alt="icon" height="36" width="36" />
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
