import React from "react";
import styles from "./WhatDo.module.scss";

import Badge from "components/Badge/Badge";
import LanguageIcon from "assets/icons/language.svg";

const WhatDo = () => (
  <div className={styles.section}>
    <div className={styles.sectionTitle}>
      <h3>Que atividades oferecemos?</h3>
    </div>
    <div className={styles.sectionContainer}>
      <div className={styles.subSection}>
        <div className={styles.subSectionTitle}>
          <h5>Oferecemos um vasto leque de aulas</h5>
        </div>
        <div className={styles.subSectionDescription}>
          <Badge icon={LanguageIcon} text="Francês" />
          <Badge icon={LanguageIcon} text="Francês" />
          <Badge icon={LanguageIcon} text="Francês" />
        </div>
        <div className={styles.subSectionTitle}>
          <a href="/#">
            <h5>e muito mais!</h5>
          </a>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subSectionTitle}>
          <h5>E outras atividades e eventos</h5>
        </div>
        <div className={styles.subSectionDescription}>
          <Badge icon={LanguageIcon} text="Francês" />
          <Badge icon={LanguageIcon} text="Francês" />
          <Badge icon={LanguageIcon} text="Francês" />
        </div>
      </div>
    </div>
  </div>
);

export default WhatDo;
