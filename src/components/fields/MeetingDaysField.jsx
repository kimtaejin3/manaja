import React, { memo } from "react";

import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";

import Field from "./Field";

import styles from "./MeetingDaysField.module.scss";
import "react-day-picker/style.css";
import { format } from "date-fns";

function MeetingDaysField({ selectedDates, onSelect }) {
  return (
    <Field className={styles.container} title="회의 후보 날짜 선택">
      <div className={styles["wrap-calendar"]}>
        <style>{dayPickerCustomCss}</style>
        <DayPicker
          mode="range"
          locale={ko}
          selected={selectedDates}
          onSelect={onSelect}
          formatters={{
            formatCaption: () => format(new Date(), "yyyy년 MM월"),
          }}
        />
      </div>
    </Field>
  );
}

const dayPickerCustomCss = `
  .rdp-root{
    --rdp-accent-color: #000;
    --rdp-today-color: #f9527d;
    --rdp-range_start-date-background-color: #f9527d;
    --rdp-range_end-date-background-color: #f9527d;
    --rdp-selected-border: #f9527d;
    --rdp-range_middle-background-color: #fce8ed;
  }

  .rdp-months {
    max-width: initial;
  }

  .rdp-month_caption{
    margin-bottom: 20px;
  }

  .rdp-caption_label{
    font-size: 1.4rem;
    font-weight: normal;
  }
  
  .rdp-month {
    width: 100%;
  }
  
  .rdp-month_grid {
    width: 110%;
    margin-left: -5%;
  }

  .rdp-weekday{
    font-size: 1.3rem;
  }

  .rdp-selected {
    font-weight: normal;
  }

  .rdp-day {
    font-size: 1.3rem;
    width: 40px;
  }

  .rdp-day_button {
    display: initial;
    height: 40px;
    width: 40px;
  }

`;

export default memo(MeetingDaysField);
