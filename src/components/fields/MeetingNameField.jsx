import Field from "./Field";

import styles from "./MeetingNameField.module.scss";

export default function MeetingNameField() {
  return (
    <Field title="회의 이름" className={styles.container}>
      <input type="text" />
    </Field>
  );
}
