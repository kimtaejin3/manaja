import { useEffect, useState } from "react";
import { getMeetingAsync } from "../api/meeting";
import MeetingHeader from "../components/headers/MeetingHeader";
import { useParams } from "react-router-dom";

export default function MeetingPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meeting, setMeeting] = useState({});

  const getMeeting = async () => {
    setLoading(true);
    try {
      const data = await getMeetingAsync({ id });
      setMeeting(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeeting();
  }, []);

  if (loading) {
    return <>Loading ... </>;
  }

  return (
    <>
      <MeetingHeader title={meeting.name} />
    </>
  );
}
