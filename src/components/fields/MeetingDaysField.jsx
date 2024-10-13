import styles from "./MeetingDaysField.module.scss";

export default function MeetingDaysField({ sx }) {
  return (
    <div style={sx} className={styles.container}>
      <div className={styles.header}>
        <label>회의 후보 날짜 고르기</label>
        <p>후보 날짜들을 모두 선택해주세요!</p>
      </div>
    </div>
  );
}
