import React, { useState } from "react";
import PropTypes from 'prop-types';
import {ContactForm}  from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = props => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
 
  const [phoneNum, setPhoneNum] = useState('');

  const handleNumberChange = (e) => {
    setPhoneNum(e.target.value);
  }  

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }  

  const checkForDuplicate = (contacts) => {
    let duplicateExists = false;
    contacts.forEach(e => {
      if(e.name === name){
        duplicateExists = true;
      }
    })
    return duplicateExists;
   }

  const handleSubmit = (e) => {
    e.preventDefault();
   if(checkForDuplicate(props.contacts)){
     console.log("Adding duplicate name is not allowed");
   } else {
     props.addContact(name, phoneNum, email);
   }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
         <ContactForm name={name} setName={handleNameChange} phone={phoneNum} setPhone={handleNumberChange} email={email} setEmail={handleEmailChange}  handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts} />
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
}