import { useEffect, useState } from "react";

import {
  addMonths,
  getDaysInMonth,
  isFuture,
  subMonths,
  getMonth,
} from "date-fns";

import styles from "./Calendar.module.scss";

import arrowLeftIcon from "../../assets/arrow-left.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import arrowLeftIcon_active from "../../assets/arrow-left_active.svg";
import arrowRightIcon_active from "../../assets/arrow-right_active.svg";

const dayes = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [monthOfSelectedDates, setMonthOfSelectedDates] = useState(null);

  const handleDateSelect = (value) => {
    if (selectedDates[0] === value) return;

    setMonthOfSelectedDates(getMonth(date));

    if (selectedDates.length < 2) {
      setSelectedDates([...selectedDates, value]);
      setSelectedDates((prevValue) => prevValue.sort((a, b) => a - b));
    } else {
      setSelectedDates([value]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PrevButton
          isActive={isFuture(date)}
          onClick={() => setDate(subMonths(date, 1))}
          className={styles.calendarArrowButton}
        />
        <span>
          {date.getFullYear()}년 {date.getMonth() + 1}월
        </span>
        <NextButton
          className={styles.calendarArrowButton}
          onClick={() => setDate(addMonths(date, 1))}
        />
      </div>
      <div className={styles.calendar}>
        <div className={styles.day}>
          {dayes.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className={styles.dateWrap}>
          {new Array(getDaysInMonth(date)).fill().map((val, index) => (
            <div
              key={index}
              className={`${
                monthOfSelectedDates === getMonth(date) &&
                ((selectedDates[0] <= index + 1 &&
                  index + 1 <= selectedDates[1]) ||
                  selectedDates[0] === index + 1) &&
                styles.selected
              } ${
                selectedDates.length > 1 &&
                selectedDates[0] === index + 1 &&
                styles.leftRounded
              } ${selectedDates[1] === index + 1 && styles.rightRounded}`}
              onClick={() => handleDateSelect(index + 1)}
            >
              <span className={styles.date}>{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrevButton({ isActive = false, className, onClick }) {
  return (
    <button disabled={!isActive} className={className} onClick={onClick}>
      <img
        src={isActive ? arrowLeftIcon_active : arrowLeftIcon}
        alt="arrow_left_icon"
      />
    </button>
  );
}

function NextButton({ isActive = true, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <img
        src={isActive ? arrowRightIcon_active : arrowRightIcon}
        alt="arrow_right_icon"
      />
    </button>
  );
}
