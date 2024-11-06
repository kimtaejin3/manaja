import Button from "../components/shared/Button";
import MeetingDaysField from "../components/fields/MeetingDaysField";
import MeetingNameField from "../components/fields/MeetingNameField";
import MeetingTimeField from "../components/fields/MeetingTimeField";
import MainHeader from "../components/headers/MainHeader";

import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <MeetingNameField />
      <MeetingDaysField />
      <MeetingTimeField />
      <Button className={styles.button}>완료</Button>
    </div>
  );
}
