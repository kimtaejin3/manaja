import { BASE_URL } from "./constants";

const createMeetingAsync = async ({ name, time, dates }) => {
  const data = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      time,
      dates,
    }),
  });
  const res = await data.json();
  return res;
};

export { createMeetingAsync };
