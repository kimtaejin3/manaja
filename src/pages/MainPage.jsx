import Button from "../components/shared/Button";
import MeetingDaysField from "../components/fields/MeetingDaysField";
import MeetingNameField from "../components/fields/MeetingNameField";
import MeetingTimeField from "../components/fields/MeetingTimeField";
import MainHeader from "../components/headers/MainHeader";

import styles from "./MainPage.module.scss";
import { useCallback, useState } from "react";
import { isEqual } from "date-fns";
import Toast from "../components/shared/Toast";
import useToast from "../hooks/useToast";

export default function MainPage() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [selectedDates, setSelectedDates] = useState();

  const { isOpen, message, openToast, closeToast } = useToast();

  const handleSelect = useCallback(
    (newSelected) => {
      if (!isEqual(selectedDates?.from, selectedDates?.to)) {
        if (isEqual(selectedDates?.to, newSelected.to)) {
          setSelectedDates({ from: newSelected.from, to: newSelected.from });
        } else {
          setSelectedDates({ from: newSelected.to, to: newSelected.to });
        }
        return;
      }
      setSelectedDates(newSelected);
    },
    [selectedDates]
  );

  const handleSubmit = () => {
    if (!name || !time || !selectedDates) {
      openToast("입력되지 않은 값이 있습니다.");
      return;
    }
    console.log(name);
    console.log(time);
    console.log(selectedDates);
  };

  return (
    <div className={styles.container}>
      <MainHeader />
      <MeetingNameField
        name={name}
        onChangeName={(newName) => setName(newName)}
      />
      <MeetingDaysField selectedDates={selectedDates} onSelect={handleSelect} />
      <MeetingTimeField time={time} onSelect={(time) => setTime(time)} />
      <Button onClick={handleSubmit} className={styles.button}>
        완료
      </Button>
      <Toast isOpen={isOpen} onClose={closeToast}>
        {message}
      </Toast>
    </div>
  );
}
