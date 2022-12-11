import React, { useState, useEffect } from 'react';
import styles from './componentStyles/Countdown.module.css';
import { Link } from 'react-scroll';

const Countdown = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const countDown = () => {
    const countDate = new Date('September 26, 2022 00:00:00').getTime();
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    setDay(Math.floor(gap / day));
    setHour(Math.floor((gap % day) / hour));
    setMinute(Math.floor((gap % hour) / minute));
    setSecond(Math.floor((gap % minute) / second));

    // const textDay = Math.floor(gap / day);
    // const textHour = Math.floor((gap % day) / hour);
    // const textMinute = Math.floor((gap % hour) / minute);
    // const textSecond = Math.floor((gap % minute) / second);

    // return { textDay, textHour, textMinute, textSecond };
  };

  useEffect(() => {
    const intervalID = setInterval(() => countDown(), 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <div className={styles.containerDay}>
          <h3 className={styles.day}>{day}</h3>
          <h3>Days</h3>
        </div>
        <div className={styles.containerHour}>
          <h3 className={styles.hour}>{hour}</h3>
          <h3>Hours</h3>
        </div>
        <div className={styles.containerMinute}>
          <h3 className={styles.minute}>{minute}</h3>
          <h3>Minutes</h3>
        </div>
        <div className={styles.containerSecond}>
          <h3 className={styles.second}>{second}</h3>
          <h3>Seconds</h3>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link
          activeClass="active"
          to={'apply'}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          <span className={styles.buttonText}>Apply Now &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Countdown;
