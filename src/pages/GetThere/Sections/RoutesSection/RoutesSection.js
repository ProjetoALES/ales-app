import React from "react";
import styles from "./RoutesSection.module.scss";
import RouteCard from "components/RouteCard/RouteCard";

const RoutesSection = () => (
  <div className={styles.container}>
    <RouteCard />
    <RouteCard />
    <RouteCard />
  </div>
);

export default RoutesSection;
