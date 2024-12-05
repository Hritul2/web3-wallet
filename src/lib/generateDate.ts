export const getFormattedDateTime = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = monthsOfYear[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  // Format hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set to 12 (12 AM/PM)

  return `${dayOfWeek}, ${month} ${day}, ${year} at ${hours}:${minutes} ${ampm}`;
};
