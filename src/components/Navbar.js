import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { styles } from './componentStyles/NavbarStyles';

const menuItems = [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'whoweare',
    label: 'Who We Are',
  },
  {
    path: 'about',
    label: 'About Us',
  },
  // {
  //   path: 'pastEditions',
  //   label: 'Past Editions',
  // },
  {
    path: 'secretariat',
    label: 'Secretariat',
  },
  {
    path: 'apply',
    label: 'Apply',
  },
  {
    path: 'contact',
    label: 'Contact Us',
  },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
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
          {menuItems.map((menuItem, i) => (
            <ScrollLink
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              key={i}
              className={sidebar ? `${styles.burgerLink}` : `${styles.link}`}
              onClick={closeSidebar}
            >
              {menuItem.label}
            </ScrollLink>
          ))}
          <Link
            to="/gallery"
            className={sidebar ? `${styles.burgerLink}` : `${styles.link}`}
          >
            Gallery
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
