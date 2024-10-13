import MeetingDaysField from "../components/fields/MeetingDaysField";
import MeetingNameField from "../components/fields/MeetingNameField";
import MainHeader from "../components/headers/MainHeader";

export default function MainPage() {
  return (
    <>
      <MainHeader />
      <MeetingNameField sx={{ marginTop: "40px" }} />
      <MeetingDaysField />
    </>
  );
}
