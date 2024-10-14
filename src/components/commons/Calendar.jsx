import styles from "./Calendar.module.scss";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";

export default function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>
          <img src={arrowLeftIcon} alt="arrow_left_icon" />
        </button>
        <span>10월</span>
        <button>
          <img src={arrowRightIcon} alt="arrow_right_icon" />
        </button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.date}>
          <span>일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
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
