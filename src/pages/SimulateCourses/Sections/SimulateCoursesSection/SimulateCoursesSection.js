import React from "react";
import CoursesScheduleTable from "components/CoursesScheduleTable/CoursesScheduleTable";
import styles from "./SimulateCoursesSection.module.scss";

const SimulateCoursesSection = () => (
  <div className={styles.container}>
    <CoursesScheduleTable />
  </div>
);

export default SimulateCoursesSection;
