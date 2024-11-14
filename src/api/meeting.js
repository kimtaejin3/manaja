import { BASE_URL } from "./constants";

const createMeetingAsync = async ({ name, time, dates }) => {
  const res = await fetch(`${BASE_URL}`, {
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
  const data = await res.json();
  return data;
};

const getMeetingAsync = async ({ id }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export { createMeetingAsync, getMeetingAsync };
