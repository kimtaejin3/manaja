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
      <div></div>
    </div>
  );
}
