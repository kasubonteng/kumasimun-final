import React from 'react';

import PageTitle from '../../components/PageTitle';

import styles from './Secretariat.module.css';
import data from './Secretariat.data';
import SecretariatCard from '../../components/SecretariatCard';

const Secretariat = () => {
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
    <div id="secretariat" className={styles.container}>
      <PageTitle subheading="" heading="Secretariat" />
      <div className={styles.main}>
        {data.map((item, i) => (
          <SecretariatCard
            key={i}
            image={process.env.PUBLIC_URL + `/${images[i]}`}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Secretariat;
