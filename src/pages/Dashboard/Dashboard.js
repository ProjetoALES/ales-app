import React from "react";
import DashboardCard from "components/DashboardCard/DashboardCard";
import styles from "./Dashboard.module.scss";

const Dashboard = () => (
  <div className={styles.container}>
    <h3>Dashboard</h3>
    <div className={styles.cardsContainer}>
      <DashboardCard text="Perfil" to="/" color="blue" />
      <DashboardCard text="Semestres" to="/semesters" color="blue" />
      <DashboardCard text="Coordenadores" to="/" color="green" />
      <DashboardCard text="Professores" to="/" color="red" />
      <DashboardCard text="Matérias" to="/" color="yellow" />
      <DashboardCard text="Alunos" to="/" color="purple" />
      <DashboardCard text="Notificar Alunos" to="/" color="orange" />
    </div>
  </div>
);

export default Dashboard;
