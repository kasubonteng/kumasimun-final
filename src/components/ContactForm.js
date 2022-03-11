import React, { useState, useRef } from 'react';
import styles from '../sections/Contact/Contact.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9sd7nvg',
        'template_26je0y4',
        form.current,
        '0_XYGXOBpi9o6vTCt'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => sendEmail(e)}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Name{' '}
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Your Email{' '}
            <input
              className={styles.input}
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Message{' '}
            <textarea
              className={styles.textarea}
              type="text"
              id="email"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <input className={styles.button} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
