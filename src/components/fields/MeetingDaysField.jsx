import Calendar from "../shared/Calendar";
import styles from "./MeetingDaysField.module.scss";

export default function MeetingDaysField({ sx }) {
  return (
    <div style={sx} className={styles.container}>
      <label>회의 후보 날짜 고르기</label>
      <div className={styles.calendarField}>
        <Calendar />
      </div>
    </div>
  );
}
