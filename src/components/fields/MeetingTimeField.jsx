import Field from "./Field";

import styles from "./MeetingTimeField.module.scss";

import clockIcon from "../../assets/clock.svg";

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
      <option value="오전 12시">오전 12시</option>
      <option value="오전 1시">오전 1시</option>
      <option value="오전 2시">오전 2시</option>
      <option value="오전 3시">오전 3시</option>
      <option value="오전 4시">오전 4시</option>
      <option value="오전 5시">오전 5시</option>
      <option value="오전 6시">오전 6시</option>
      <option value="오전 7시">오전 7시</option>
      <option value="오전 8시">오전 8시</option>
      <option value="오전 9시">오전 9시</option>
      <option value="오전 10시">오전 10시</option>
      <option value="오전 11시">오전 11시</option>
      <option value="오전 12시">오후 12시</option>
      <option value="오후 1시">오후 1시</option>
      <option value="오후 2시">오후 2시</option>
      <option value="오후 3시">오후 3시</option>
      <option value="오후 4시">오후 4시</option>
      <option value="오후 5시">오후 5시</option>
      <option value="오후 6시">오후 6시</option>
      <option value="오후 7시">오후 7시</option>
      <option value="오후 8시">오후 8시</option>
      <option value="오후 9시">오후 9시</option>
      <option value="오후 10시">오후 10시</option>
      <option value="오후 11시">오후 11시</option>
    </select>
  );
}
