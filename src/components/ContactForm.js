import React, { useState } from 'react';
import styles from '../sections/Contact/Contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');
  return (
    <div>
      <form className={styles.form}>
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
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
