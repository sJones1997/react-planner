import React, { useState } from "react";
import PropTypes from 'prop-types';
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm.js';
import {TileList} from '../../components/tileList/TileList.js';
export const AppointmentsPage = props => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const handleTitleChange = (title) => {
    setTitle(title);
  }
  const [contact, setContact] = useState('');
  const handleContactChange = (contact) => {
    setContact(title);
  }  
  const [date, setDate] = useState('');
  const handleDateChange = (date) => {
    setDate(date)
  }
  const [time, setTime] = useState('');
  const handleTimeChange = (time) => {
    setTime(time)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts} 
          title={title} 
          setTitle={handleTitleChange}  
          contact={contact}
          setContact={handleContactChange}
          date={date}
          setDate={handleDateChange}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propType ={
  appointments: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  addAppointment: PropTypes.func.isRequired
}
