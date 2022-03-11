import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../sections/Contact/Contact.module.css';

const ContactItem = ({ icon, text }) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.iconStyles}>
        <div className={styles.icon}>
          <FontAwesomeIcon className="w-[3.5rem]" icon={icon} />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default ContactItem;
