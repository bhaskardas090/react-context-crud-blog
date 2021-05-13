import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import style from './contact.module.scss';
import { Button } from 'primereact/button';

const Contact = () => {
  return (
    <div>
      <div className={style.contactDetails}>
        <Button
          label="+91 12345678"
          icon="pi pi-phone"
          className="p-button-success p-button-lg"
        />
        <Button
          label="youremail@gmail.com"
          icon="pi pi-inbox"
          className="p-button-secondary p-button-lg"
        />
        <Button
          label="Nagaon, Assam, India"
          icon="pi pi-map"
          className="p-button-danger p-button-lg"
        />
      </div>
      <form className={style.contactForm}>
        <div className="p-grid">
          <div className="p-col">
            <InputText
              type="text"
              placeholder="First Name"
              className={style.firstName}
            />
          </div>
          <div className="p-col">
            <InputText
              type="text"
              placeholder="Last Name"
              className={style.lastName}
            />
          </div>
        </div>
        <br />
        <InputTextarea
          rows={10}
          cols={30}
          autoResize
          placeholder="Write your message..."
          className={style.message}
        />
        <Button
          label="Reach Out To Me :)"
          className={style.submitContactForm}
        />
      </form>
    </div>
  );
};

export default Contact;
