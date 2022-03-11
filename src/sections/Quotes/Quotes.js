import React, { useEffect } from 'react';
import { useState } from 'react';

import data from './Quotes.data';
import styles from './Quotes.module.css';

const Quotes = () => {
  const [current, setCurrent] = useState(data[0]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (active < 4) {
        setCurrent(data[active + 1]);
        setActive(active + 1);
      } else {
        setCurrent(data[0]);
        setActive(0);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [current, active]);

  const handleSetClick = (event) => {
    setCurrent(data[event.target.getAttribute('data-quote')]);
    setActive(event.target.getAttribute('data-quote'));
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className="mb-5 text-center text-white">{current.quote}</p>
        <p className="mb-5 text-center text-white">{current.author}</p>
      </div>
      <div className="flex justify-center text-center">
        {Object.keys(data).map((key) => (
          <span
            className={key === active ? styles.activeSpan : styles.span}
            onClick={(event) => handleSetClick(event)}
            data-quote={key}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
