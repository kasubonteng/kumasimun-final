import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  // {
  //   path: 'home',
  //   label: 'Home',
  // },
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

const styles = {
  header:
    'relative fixed z-80 top-0 w-full px-[100px] py-[20px] flex justify-between items-center bg-white',
  logo: 'relative text-[30px] font-extrabold tracking-[1px]',
  link: "m-1 cursor-pointer my-[4px] mx-4 font-medium tracking-[1px] md:hidden relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-left after:ease-out after:duration-[25] after:transition-[transform] hover:after:scale-x-[1] ",
  burgerLink:
    'cursor-pointer  md:mr-0 md:mb-[50px] md:font-bold md:text-[25px] md:tracking-[2px] px-3 py-[2px] m-1 font-medium',
  input: 'z-10',
  label: 'hidden md:block md:cursor-pointer md:text-[25px] md:z-30',
  sidebar:
    'md:inset-0 md:flex md:flex-col md:justify-center md:items-center md:fixed md:z-20 md:bg-[rgba(255,255,255)]',
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <div>
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
