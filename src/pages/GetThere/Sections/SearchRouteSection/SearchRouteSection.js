import React from "react";
import styles from "./SearchRouteSection.module.scss";
import SearchRouteCard from "components/SearchRouteCard/SearchRouteCard";

const SearchRouteSection = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h3>Descubra o melhor caminho</h3>
    </div>
    <SearchRouteCard />
  </div>
);

export default SearchRouteSection;
