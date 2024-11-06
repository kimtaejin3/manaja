import Button from "../components/shared/Button";
import MeetingDaysField from "../components/fields/MeetingDaysField";
import MeetingNameField from "../components/fields/MeetingNameField";
import MeetingTimeField from "../components/fields/MeetingTimeField";
import MainHeader from "../components/headers/MainHeader";

export default function MainPage() {
  return (
    <>
      <MainHeader />
      <MeetingNameField />
      <MeetingDaysField />
      <MeetingTimeField />
      <Button>완료</Button>
    </>
  );
}
