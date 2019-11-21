import React, { useState } from "react";
import SimulateCoursesHeader from "./Sections/SimulateCoursesHeader/SimulateCoursesHeader";
import CoursesSection from "./Sections/CoursesSection/CoursesSection";
import SimulateCoursesSection from "./Sections/SimulateCoursesSection/SimulateCoursesSection";

const SimulateCourses = () => {
  const coursesFromAPI = [
    {
      id: "1",
      name: "Desenho I",
      frequency: "Semanalmente aos sábados",
      description:
        "Quer aprender a fazer mangás? ou desenhos realistas? Venha nas aulas e se torne um artista nato",
      nextClass: "Amanhã",
      schedule: {
        day: "Sábado",
        start: "9:00",
        end: "10:30"
      }
    },
    {
      id: "2",
      name: "Programação I",
      frequency: "Semanalmente aos domingos",
      description: "Venha aprender a desenvolver jogos e sites com a gente!",
      nextClass: "Depois de amanhã",
      schedule: {
        day: "Domingo",
        start: "14:00",
        end: "15:30"
      }
    },
    {
      id: "3",
      name: "Robótica I",
      frequency: "Semanalmente aos domingos",
      description: "Aprenda a fazer robozinhos com os mais diversos sensores!",
      nextClass: "Depois de amanhã",
      schedule: {
        day: "Domingo",
        start: "15:30",
        end: "17:00"
      }
    }
  ];

  const [coursesSelected, setCoursesSelected] = useState([]);

  const onCourseToggle = course => {
    const index = coursesSelected.findIndex(courseInState => {
      return courseInState.id === course.id;
    });
    if (index === -1) {
      setCoursesSelected([...coursesSelected, course]);
    } else {
      setCoursesSelected(
        coursesSelected.filter(courseInState => {
          return courseInState.id !== course.id;
        })
      );
    }
  };

  return (
    <div>
      <SimulateCoursesHeader />
      <SimulateCoursesSection courses={coursesSelected} />
      <CoursesSection onChange={onCourseToggle} courses={coursesFromAPI} />
    </div>
  );
};

export default SimulateCourses;
