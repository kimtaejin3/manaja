import React, { memo, useState } from "react";

import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";

import Field from "./Field";

import styles from "./MeetingDaysField.module.scss";
import "react-day-picker/style.css";
import { format, isEqual } from "date-fns";

function MeetingDaysField() {
  const [selected, setSelected] = useState();

  const handleSelect = (newSelected) => {
    // Update the selected dates
    if (!isEqual(selected?.from, selected?.to)) {
      if (isEqual(selected?.to, newSelected.to)) {
        setSelected({ from: newSelected.from, to: newSelected.from });
      } else {
        setSelected({ from: newSelected.to, to: newSelected.to });
      }
      return;
    }
    setSelected(newSelected);
  };

  return (
    <Field className={styles.container} title="회의 후보 날짜 선택">
      <div className={styles["wrap-calendar"]}>
        <style>{dayPickerCustomCss}</style>
        <DayPicker
          mode="range"
          locale={ko}
          selected={selected}
          onSelect={handleSelect}
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
    width: 100%;
    row-gap: 20px;
  }

  .rdp-weekday{
    font-size: 1.3rem;
  }

  .rdp-day {
    font-size: 1.3rem;
  }

  .rdp-day_button {
    display: initial;
    height: 40px;
    width: 40px;
  }

`;

export default memo(MeetingDaysField);
