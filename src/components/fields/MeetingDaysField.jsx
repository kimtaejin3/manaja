import Calendar from "../commons/Calendar";
import styles from "./MeetingDaysField.module.scss";

export default function MeetingDaysField({ sx }) {
  return (
    <div style={sx} className={styles.container}>
      <div className={styles.header}>
        <label>회의 후보 날짜 고르기</label>
      </div>
      <div className={styles.calendarField}>
        <Calendar />
      </div>
    </div>
  );
}
