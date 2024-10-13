import styles from "./MeetingNameField.module.scss";

export default function MeetingNameField({ sx }) {
  return (
    <div style={sx} className={styles.container}>
      <label>회의 이름 정하기</label>
      <input type="text" />
    </div>
  );
}
