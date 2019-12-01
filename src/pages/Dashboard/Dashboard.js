import React from "react";
import DashboardCard from "components/DashboardCard/DashboardCard";
import LanguageIconBlue from "assets/icons/language-blue.svg";
import LanguageIconGreen from "assets/icons/language-green.svg";
import LanguageIconRed from "assets/icons/language-red.svg";
import LanguageIconYellow from "assets/icons/language-yellow.svg";
import LanguageIconPurple from "assets/icons/language-purple.svg";
import LanguageIconOrange from "assets/icons/language-orange.svg";
import styles from "./Dashboard.module.scss";

const Dashboard = () => (
  <div className={styles.container}>
    <h3>Dashboard</h3>
    <div className={styles.cardsContainer}>
      <DashboardCard
        text="Perfil"
        icon={LanguageIconBlue}
        to="/"
        color="blue"
      />
      <DashboardCard
        text="Coordenadores"
        icon={LanguageIconGreen}
        to="/"
        color="green"
      />
      <DashboardCard
        text="Professores"
        icon={LanguageIconRed}
        to="/"
        color="red"
      />
      <DashboardCard
        text="Matérias"
        icon={LanguageIconYellow}
        to="/"
        color="yellow"
      />
      <DashboardCard
        text="Alunos"
        icon={LanguageIconPurple}
        to="/"
        color="purple"
      />
      <DashboardCard
        text="Notificar Alunos"
        icon={LanguageIconOrange}
        to="/"
        color="orange"
      />
    </div>
  </div>
);

export default Dashboard;
