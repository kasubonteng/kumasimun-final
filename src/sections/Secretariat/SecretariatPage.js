import React, { useState, useEffect } from 'react';
import styles from './Secretariat.module.css';
import data from './Secretariat.data';

const SecretariatPage = () => {
  const [active, setActive] = useState(0);

  const changeSlide = (index) => {
    setActive(index);
  };

  const images = [
    'akwasiBoakye.jpeg',
    'ireneAkwaboah.jpeg',
    'bondzieIsaac.jpeg',
    'boakyeJosephAgyeman.jpg',
    'adjeiMichael.jpeg',
    'bismarkNyame.jpeg',
    'yusufHasma.jpeg',
    'kwadwoAsubonteng.jpeg',
    'alexanderBoakye.JPG',
  ];

  return (
    <div className={styles.container}>
      <h1>Secretariat</h1>
      <div className={styles.wrapper}>
        <div className={styles.indicator}>
          {data.map((item) => (
            <span
              className={active === item.id ? styles.activeBtn : styles.btn}
              //   className={styles.btn}
              key={item.id}
              value={item.id}
              onClick={() => changeSlide(item.id)}
            ></span>
          ))}
        </div>
        <div className={styles.innerBox}>
          <div className={styles.slideRow}>
            {data.map((item, i) => (
              <div className={styles.slideCol} id="slide">
                <div className={styles.userText}>
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                  {/* <p>{item.about}</p> */}
                </div>
                <div className={styles.userImg}>
                  <img src={process.env.PUBLIC_URL + `${images[i]}`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretariatPage;
