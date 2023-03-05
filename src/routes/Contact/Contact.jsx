import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [showConfirmedForm, setShowConfirmedForm] = useState(false);
  const formSubmit = async () => {
    setShowConfirmedForm(true);
  };
  return (
    <>
      <div className="p-3">
        <h1 className="h1 p-2">צור קשר</h1>
        <Form className="card p-5 gap-3" onSubmit={() => formSubmit()}>
          <input
            className="form-control"
            type="text"
            placeholder="שם"
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="אימייל"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            placeholder="מס' פלאפון"
            onChange={(e) => setPhoneInput(e.target.value)}
          />
          <Button type="submit"> שלח</Button>
        </Form>
        <div className={showConfirmedForm ? "" : "hide_class"}>
          {nameInput}
          <br />
          {emailInput}
          <br />
          {phoneInput}
        </div>
      </div>
    </>
  );
};

export default Contact;
