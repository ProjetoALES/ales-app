import React from "react";
import Calendar from "@fullcalendar/react";
import timeGrid from "@fullcalendar/timegrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import styles from "./SimulateCoursesSection.module.scss";

const SimulateCoursesSection = () => (
  <div className={styles.container}>
    <Calendar
      locale={ptBrLocale}
      defaultView="timeGridTwoDays"
      contentHeight="auto"
      allDaySlot={false}
      slotDuration="00:30:00"
      scrollTime="2:00:00"
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
      minTime="9:00"
      maxTime="17:00"
    />
  </div>
);

export default SimulateCoursesSection;
