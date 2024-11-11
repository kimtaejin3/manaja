import Button from "../components/shared/Button";
import MeetingDaysField from "../components/fields/MeetingDaysField";
import MeetingNameField from "../components/fields/MeetingNameField";
import MeetingTimeField from "../components/fields/MeetingTimeField";
import MainHeader from "../components/headers/MainHeader";

import styles from "./MainPage.module.scss";
import { useState } from "react";

export default function MainPage() {
  const [name, setName] = useState("");
  return (
    <div className={styles.container}>
      <MainHeader />
      <MeetingNameField
        name={name}
        onChangeName={(newName) => setName(newName)}
      />
      <MeetingDaysField />
      <MeetingTimeField />
      <Button className={styles.button}>완료</Button>
    </div>
  );
}
