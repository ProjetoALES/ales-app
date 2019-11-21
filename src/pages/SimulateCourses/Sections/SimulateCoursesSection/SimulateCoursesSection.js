import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "./SimulateCoursesSection.module.scss";

const SimulateCoursesSection = () => (
  <div className={styles.container}>
    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
  </div>
);

export default SimulateCoursesSection;
