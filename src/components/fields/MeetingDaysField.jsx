import Calendar from "../shared/Calendar";
import Field from "./Field";

import styles from "./MeetingDaysField.module.scss";

export default function MeetingDaysField() {
  return (
    <Field className={styles.container} title="회의 후보 날짜 선택">
      <div className={styles.calendarField}>
        <Calendar />
      </div>
    </Field>
  );
}
