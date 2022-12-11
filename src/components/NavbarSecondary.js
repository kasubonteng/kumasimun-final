import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { styles } from './componentStyles/NavbarStyles';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div>
            <Link to="/">kimun</Link>
          </div>
        </div>
        <div className={sidebar ? `${styles.sidebar}` : ''}>
          <Link
            to="/"
            className={sidebar ? `${styles.burgerLink}` : `${styles.link}`}
          >
            &larr; Back To Home
          </Link>
        </div>
        <div className={styles.label}>
          {!sidebar ? (
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          ) : (
            <FontAwesomeIcon icon={faTimes} onClick={toggleSidebar} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
