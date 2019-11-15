import React from "react";
import styles from "./Footer.module.scss";
import FacebookIcon from "assets/icons/facebook.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import GitHubIcon from "assets/icons/github.svg";

const Footer = () => (
  <div className={styles.container}>
    <h5>
      <a href="/#">Projeto ALES</a>
    </h5>
    <div className={styles.iconContainer}>
      <a href="/#">
        <img src={FacebookIcon} alt="facebook icon" width="30" height="30" />
      </a>
      <a href="/#">
        <img src={InstagramIcon} alt="instagram icon" width="30" height="30" />
      </a>
      <a href="/#">
        <img src={GitHubIcon} alt="github icon" width="30" height="30" />
      </a>
    </div>
  </div>
);

export default Footer;
