import styles from "./MeetingTimeField.module.scss";
import clockIcon from "../../assets/clock.svg";

export default function MeetingTimeField() {
  return (
    <div className={styles.container}>
      <label>시간대 정하기</label>
      <div className={styles.timeSelection}>
        <div>
          <select>
            <option>오전 12시</option>
            <option>오전 1시</option>
          </select>
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
        <span>~</span>
        <div>
          <select>
            <option>오전 12시</option>
            <option>오전 1시</option>
          </select>
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
