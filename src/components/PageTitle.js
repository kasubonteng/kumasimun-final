import React from 'react';

const styles = {
  container: 'flex justify-center items-center uppercase flex-col pt-16',
  subheading: 'text-3 ',
  heading: 'text-[2.5rem] font-bold ',
};

const pageTitle = ({ subheading = 'Subheading', heading = 'Heading' }) => {
  return (
    <div className={styles.container}>
      <p className={styles.subheading}>{subheading}</p>
      <h2 className={styles.heading}>{heading}</h2>
    </div>
  );
};

export default pageTitle;
