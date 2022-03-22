import React from 'react';

const styles = {
  container: 'flex justify-center items-center uppercase flex-col pt-16',
  subheading: 'text-3 ',
};

const pageTitle = ({
  subheading = 'Subheading',
  heading = 'Heading',
  color = 'black',
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.subheading}>{subheading}</p>
      <h2 className={`text-[2.5rem] font-bold sm:text-[2rem] text-${color}`}>
        {heading}
      </h2>
    </div>
  );
};

export default pageTitle;
