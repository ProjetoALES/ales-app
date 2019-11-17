import React from "react";
import CourseCard from "components/CourseCard/CourseCard";
import styles from "./CoursesSection.module.scss";

const CoursesSection = ({ courses, onChange }) => (
  <div className={styles.container}>
    {courses.map(course => {
      return <CourseCard course={course} onChange={onChange} key={course.id} />;
    })}
  </div>
);

export default CoursesSection;
