import styles from "./Calendar.module.scss";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import arrowLeftIcon_active from "../../assets/arrow-left_active.svg";
import arrowRightIcon_active from "../../assets/arrow-right_active.svg";

const dates = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PrevButton className={styles.calendarArrowButton} />
        <span>2024년 11월</span>
        <NextButton className={styles.calendarArrowButton} />
      </div>
      <div className={styles.calendar}>
        <div className={styles.date}>
          {dates.map((date) => (
            <span key={date}>{date}</span>
          ))}
        </div>
        <div className={styles.day}>
          {new Array(31).fill(0).map((val, index) => (
            <div>
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

function PrevButton({ isActive = false, className }) {
  return (
    <button className={className}>
      <img
        src={isActive ? arrowLeftIcon_active : arrowLeftIcon}
        alt="arrow_left_icon"
      />
    </button>
  );
}

function NextButton({ isActive = true, className }) {
  return (
    <button className={className}>
      <img
        src={isActive ? arrowRightIcon_active : arrowRightIcon}
        alt="arrow_right_icon"
      />
    </button>
  );
}
