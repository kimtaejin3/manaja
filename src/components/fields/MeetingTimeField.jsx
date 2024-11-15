import Field from "./Field";

import styles from "./MeetingTimeField.module.scss";

import clockIcon from "../../assets/clock.svg";

// TODO: export default 따로 빼기
export default function MeetingTimeField({ time, onSelect }) {
  return (
    <Field className={styles.container} title="회의 시간대 정하기">
      <div className={styles.timeSelection}>
        <div>
          <Select type="start" time={time} onSelect={onSelect} />
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
        <span>~</span>
        <div>
          <Select type="end" time={time} onSelect={onSelect} />
          <span>
            <img src={clockIcon} alt="clock_icon" />
          </span>
        </div>
      </div>
    </Field>
  );
}

function Select({ type, time, onSelect }) {
  return (
    <select
      value={type === "start" ? time.start : time.end}
      onChange={(e) => {
        if (type === "start") {
          onSelect({ ...time, start: e.target.value });
        } else {
          onSelect({ ...time, end: e.target.value });
        }
      }}
    >
      <option value="12-am">오전 12시</option>
      <option value="1-am">오전 1시</option>
      <option value="2-am">오전 2시</option>
      <option value="3-am">오전 3시</option>
      <option value="4-am">오전 4시</option>
      <option value="5-am">오전 5시</option>
      <option value="6-am">오전 6시</option>
      <option value="7-am">오전 7시</option>
      <option value="8-am">오전 8시</option>
      <option value="9-am">오전 9시</option>
      <option value="10-am">오전 10시</option>
      <option value="11-am">오전 11시</option>
      <option value="12-pm">오후 12시</option>
      <option value="1-pm">오후 1시</option>
      <option value="2-pm">오후 2시</option>
      <option value="3-pm">오후 3시</option>
      <option value="4-pm">오후 4시</option>
      <option value="5-pm">오후 5시</option>
      <option value="6-pm">오후 6시</option>
      <option value="7-pm">오후 7시</option>
      <option value="8-pm">오후 8시</option>
      <option value="9-pm">오후 9시</option>
      <option value="10-pm">오후 10시</option>
      <option value="11-pm">오후 11시</option>
    </select>
  );
}
