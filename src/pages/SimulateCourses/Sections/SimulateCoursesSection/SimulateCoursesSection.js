import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGrid from "@fullcalendar/timegrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import moment from "moment-timezone";
import styles from "./SimulateCoursesSection.module.scss";

const SimulateCoursesSection = ({ courses }) => {
  const simulateCourses = () => {
    courses.map((course, index) => {
      return {
        id: index,
        title: course.name,
        start: moment
          .tz(`2000-01-01 ${course.schedule.start}, America/Sao_Paulo`)
          .format(),
        end: moment
          .tz(`2000-01-01 ${course.schedule.end}, America/Sao_Paulo`)
          .format(),
        color: "pink"
      };
    });
  };

  return (
    <div className={styles.container}>
      <FullCalendar
        locale={ptBrLocale}
        timeZone="America/Sao_Paulo"
        defaultView="timeGridTwoDays"
        defaultDate={moment.tz("2000-01-01", "America/Sao_Paulo")}
        contentHeight="auto"
        allDaySlot={false}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: false
        }}
        validRange={{
          start: moment.tz("2000-01-01 09:00", "America/Sao_Paulo").format(),
          end: moment.tz("2000-01-02 17:00", "America/Sao_Paulo").format()
        }}
        columnHeaderFormat={{
          weekday: "long"
        }}
        views={{
          timeGridTwoDays: {
            type: "timeGrid",
            duration: { days: 2 }
          }
        }}
        plugins={[timeGrid, momentTimezonePlugin]}
        header={{
          left: "",
          center: "",
          right: ""
        }}
        minTime="09:00"
        maxTime="17:00"
        events={simulateCourses}
      />
    </div>
  );
};

export default SimulateCoursesSection;
