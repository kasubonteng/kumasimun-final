import React from 'react';
import styles from './Apply.module.css';

import PageTitle from '../../components/PageTitle';

const Apply = () => {
  return (
    <div id="apply">
      <PageTitle subheading="" heading="Apply" />
      <div className={styles.main}>
        <div className={styles.heading}>Join Us Now</div>
        <div>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSfn0l3l1wmyZ7OD6supH-KyjEszb1K0zJAoTDsg_jep17OAcQ/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
            method="get"
            target="_blank"
          >
            <button className={styles.applyButton}>Delegates &rarr;</button>
          </form>
        </div>
        <div>
          <form
            action="https://docs.google.com/forms/d/19R6jXGO5vJB51xZGJaW2-vDhh9cT9slFgLwVyqaiXIk/edit"
            method="get"
            target="_blank"
          >
            <button className={styles.applyButton}>Officials &rarr;</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
