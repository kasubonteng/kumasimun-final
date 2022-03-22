import React, { useState } from 'react';
import styles from './Secretariat.module.css';
import data from './Secretariat.data';
import PageTitle from '../../components/PageTitle';

const NewSecretariat = () => {
  const [active, setActive] = useState(0);

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
    <div className={styles.container} id="secretariat">
      <PageTitle subheading="" heading="Secretariat" color="white" />
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.indicator}>
            {data.map((item) => (
              <span
                className={active === item.id ? styles.activeBtn : styles.btn}
                key={item.id}
                value={item.id}
                onClick={() => setActive(item.id)}
              ></span>
            ))}
          </div>
          <div className={styles.innerBox}>
            <div className={styles.slideRow}>
              <div className={styles.slideCol}>
                <div className={styles.userText}>
                  <h3>{data[active].name}</h3>
                  <p className={styles.position}>{data[active].position}</p>
                  <p className={styles.about}>{data[active].about}</p>
                </div>
              </div>
              <div className={styles.userImg}>
                <img
                  src={process.env.PUBLIC_URL + `${images[active]}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSecretariat;
