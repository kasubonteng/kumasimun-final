import React from 'react';

import styles from './componentStyles/SecretariatCardStyles.module.css';

const SecretariatCard = ({ image, name, position }) => {
  return (
    <div className="inline-block">
      <div className={styles.box}>
        <img src={image} alt="" />
        <div className={styles.content}>
          <h1 className="text-center text-xl font-semibold">{name}</h1>
          <p className="mt-2 text-center text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default SecretariatCard;
