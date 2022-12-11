import React from 'react';
import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div className={styles.wrapper} id="footer">
      <div className={styles.icons}>
        <a
          href="https://web.facebook.com/KIMUN.GLOBAL/?paipv=0&eav=AfY57DX1YpnKu9GDh2zjFwWcWUpdSBbkqrpKuTWNlDeiL0v1ZjMIaYZd1GrxFEwOpzg&_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FontAwesomeIcon className={styles.linkItem} icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FontAwesomeIcon className={styles.linkItem} icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/kumasimun/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className={styles.linkItem} icon={faInstagram} />
        </a>
      </div>
      <p className={styles.copyrightText}>
        &copy;{year} Kumasi International Model United Nations
      </p>
    </div>
  );
};

export default Footer;
