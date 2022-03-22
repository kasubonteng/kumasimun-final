import React from 'react';
import styles from './Header.module.css';

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section id="home" className={styles.sect}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.text}>
            Kumasi <br /> International <br /> Model <br /> United <br />
            Nations
          </h2>
          <div>
            <Link
              activeClass="active"
              to={'welcome'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.button}
            >
              <span className={styles.buttonText}>More Info &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
