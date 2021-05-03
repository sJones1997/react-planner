import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = props => {
  return (
    <select onChange={props.contactChange}>
      <option selected={props.contacts.length === 0 ? "true" : "false"} >Please select a contact</option>
      {props.contacts.map(e => (
        <option selected={props.contacts.length >= 1 ? "true" : "false"} value={e.name}>{e.name}</option>
      ))}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactChange: PropTypes.func.isRequired
}

