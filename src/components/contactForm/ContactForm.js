import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name}  onChange={setName} />
      <input type="number" placeholder="Phone number" value={phone} onChange={setPhone} />
      <input type="email" placeholder="Email address" value={email} onChange={setEmail} />
      <button type="submit">Submit</button>
    </form>
  );
};
