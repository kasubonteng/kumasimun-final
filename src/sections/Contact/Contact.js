import React from 'react';
import ContactItem from '../../components/ContactItem';
import ContactForm from '../../components/ContactForm';
import Map from '../../components/Map';
import PageTitle from '../../components/PageTitle';
import styles from './Contact.module.css';

import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className={styles.div}>
      <div className={styles.container}>
        <PageTitle subheading="Get In Touch" heading="Contact" />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ContactItem icon={faPhone} text="+233(0) 000 000 0000" />
            <ContactItem icon={faEnvelope} text="kumasimun@gmail.com" />
            <ContactItem icon={faLocationDot} text="Kumasi, Ghana" />
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
