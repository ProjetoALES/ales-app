import React from "react";
import Calendar from "@fullcalendar/react";
import timeGrid from "@fullcalendar/timegrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import styles from "./SimulateCoursesSection.module.scss";

const SimulateCoursesSection = () => (
  <div className={styles.container}>
    <Calendar
      locale={ptBrLocale}
      timeZone="America/Sao_Paulo"
      defaultView="timeGridTwoDays"
      defaultDate="2000-01-01"
      contentHeight="auto"
      allDaySlot={false}
      slotLabelFormat={{
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: false
      }}
      validRange={{
        start: "2000-01-01",
        end: "2000-01-02"
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
      plugins={[timeGrid]}
      header={{
        left: "",
        center: "",
        right: ""
      }}
      minTime="9:00:00"
      maxTime="17:00:00"
      events={[
        {
          id: "1",
          title: "Monitoria",
          start: "2000-01-01 12:00:00",
          end: "2000-01-01 14:00:00",
          color: "yellow"
        },
        {
          id: "2",
          title: "Monitoria 2",
          start: "2000-01-02 00:00",
          end: "2000-01-02 12:00",
          color: "red"
        }
      ]}
    />
  </div>
);

export default SimulateCoursesSection;
