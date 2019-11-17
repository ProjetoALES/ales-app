import React, { useState } from "react";
import SimulateCoursesHeader from "./Sections/SimulateCoursesHeader/SimulateCoursesHeader";
import SimulateCoursesSection from "./Sections/SimulateCoursesSection/SimulateCoursesSection";
import CoursesSection from "./Sections/CoursesSection/CoursesSection";

const SimulateCourses = () => {
  const coursesFromAPI = [
    {
      id: "1",
      name: "Desenho I",
      frequency: "Semanalmente aos sábados",
      description:
        "Quer aprender a fazer mangás? ou desenhos realistas? Venha nas aulas e se torne um artista nato",
      nextClass: "Amanhã",
      schedule: ["9:00", "10:30"]
    },
    {
      id: "2",
      name: "Programação I",
      frequency: "Semanalmente aos domingos",
      description: "Venha aprender a desenvolver jogos e sites com a gente!",
      nextClass: "Depois de amanhã",
      schedule: ["14:00", "15:30"]
    },
    {
      id: "3",
      name: "Robótica I",
      frequency: "Semanalmente aos domingos",
      description: "Aprenda a fazer robozinhos com os mais diversos sensores!",
      nextClass: "Depois de amanhã",
      schedule: ["15:30", "17:00"]
    }
  ];

  const [courses, setCourses] = useState([]);

  const onCourseToggle = course => {
    const index = courses.findIndex(courseInState => {
      return courseInState.id === course.id;
    });
    if (index === -1) {
      setCourses([...courses, course]);
    } else {
      setCourses(
        courses.filter(courseInState => {
          return courseInState.id !== course.id;
        })
      );
    }
  };

  return (
    <div>
      <SimulateCoursesHeader />
      <SimulateCoursesSection />
      <CoursesSection onChange={onCourseToggle} courses={coursesFromAPI} />
    </div>
  );
};

export default SimulateCourses;
