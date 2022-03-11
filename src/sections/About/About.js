import React from 'react';
import styles from './About.module.css';
import { Link } from 'react-scroll';

import PageTitle from '../../components/PageTitle';

const About = () => {
  return (
    <div id="about" className={styles.main}>
      <div className={styles.container}>
        <PageTitle subheading="" heading="About us" />
        <div className={styles.paragraph}>
          <p className="py-4">
            Kumasi International Model United Nations is a simulation of the
            United Nations for students and interested persons who will want to
            simulate and model the UN.
          </p>
          <br />
          <p className="py-4">
            This simulation conference has various key committees on the UN that
            delegates will model. Some of these committees include, Security
            Council, International Court of Justice (ICJ) , World Health
            Organization (WHO) and many others.
          </p>
          <br />
          <p className="py-4">
            The maiden face to face Kumasi International Model United Nations
            Conference will be held in August 2022.
          </p>
          <br />
          <p className="py-4">
            For enquiries and any issue, reach the KIMUN secretariat on
            <span className="italic"> +233 (0) 24 613 4930</span>, and on{' '}
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className="underline"
            >
              our various social media pages.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
