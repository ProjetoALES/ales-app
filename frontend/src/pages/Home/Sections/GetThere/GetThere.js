import React from "react";
import styles from "./GetThere.module.scss";

const GetThere = () => (
  <div className={styles.section}>
    <div className={styles.sectionTitle}>
      <h3>Como Chegar</h3>
    </div>
    <div className={styles.sectionContainer}>
      <div className={styles.subSection}>
        <h5>Aulas aos Sábados</h5>
        <span>EE Barão Geraldo de Rezende</span>
        <span>Rua Jerônimo Pátaro, s/n</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.40228366633!2d-47.08388428541195!3d-22.82460154068099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6cbeb5da1ab%3A0x5bd30fe91c0b65f9!2sState%20school%20Bar%C3%A3o%20Geraldo%20de%20Rezende!5e0!3m2!1sen!2sbr!4v1573257157005!5m2!1sen!2sbr"
        frameborder="0"
      ></iframe>
      <div className={styles.subSection}>
        <h5>Aulas aos Domingos</h5>
        <span>Instituto de Computação da Unicamp</span>
        <span>Av. Albert Einstein, 400</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.697926584486!2d-47.06606538541229!3d-22.813654340289034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c153684c9b8d%3A0x1aa3c51e3317b873!2sInstitute%20of%20Computing%20-%20IC%203%20%2F%203.5%20-%20Unicamp!5e0!3m2!1sen!2sbr!4v1573257219017!5m2!1sen!2sbr"
        frameborder="0"
      ></iframe>
    </div>
  </div>
);

export default GetThere;
