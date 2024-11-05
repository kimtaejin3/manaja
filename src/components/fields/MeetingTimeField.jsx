import styles from "./MeetingTimeField.module.scss";
import clockIcon from "../../assets/clock.svg";

export default function MeetingTimeField() {
  return (
    <div className={styles.container}>
      <label>시간대 정하기</label>
      <div className={styles.timeSelection}>
        <div>
          <Select />
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
        <span>~</span>
        <div>
          <Select />
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <select>
      <option>오전 12시</option>
      <option>오전 1시</option>
      <option>오전 2시</option>
      <option>오전 3시</option>
      <option>오전 4시</option>
      <option>오전 5시</option>
      <option>오전 6시</option>
      <option>오전 7시</option>
      <option>오전 8시</option>
      <option>오전 9시</option>
      <option>오전 10시</option>
      <option>오전 11시</option>
      <option>오후 12시</option>
      <option>오후 1시</option>
      <option>오후 2시</option>
      <option>오후 3시</option>
      <option>오후 4시</option>
      <option>오후 5시</option>
      <option>오후 6시</option>
      <option>오후 7시</option>
      <option>오후 8시</option>
      <option>오후 9시</option>
      <option>오후 10시</option>
      <option>오후 11시</option>
    </select>
  );
}
