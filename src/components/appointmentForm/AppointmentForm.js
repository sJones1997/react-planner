import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={setTitle} />
      <input type="date" placeholder="Date" value={date} min={getTodayString()} onChange={setDate}/>
      <input type="time" placeholder="Time" value={time} onChange={setTime}/>
      <ContactPicker contacts={contacts} contactChange={setContact} />
      <button type="submit">Submit</button>
    </form>
  );
};
