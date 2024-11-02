import { useState } from "react";

import styles from "./Calendar.module.scss";

import arrowLeftIcon from "../../assets/arrow-left.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import arrowLeftIcon_active from "../../assets/arrow-left_active.svg";
import arrowRightIcon_active from "../../assets/arrow-right_active.svg";
import { addMonths, getDaysInMonth, isFuture, subMonths } from "date-fns";

const dates = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar() {
  const [date, setDate] = useState(new Date());

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
        <div className={styles.date}>
          {dates.map((date) => (
            <span key={date}>{date}</span>
          ))}
        </div>
        <div className={styles.day}>
          {new Array(getDaysInMonth(date)).fill().map((val, index) => (
            <div key={index}>
              <span className={index === 15 ? styles.selected : ""}>
                {index + 1}
              </span>
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
