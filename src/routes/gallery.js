import React from 'react';
import Slider from '../sections/Slider/Slider';

import Navbar from '../components/NavbarSecondary';
import PageTitle from '../components/PageTitle';

const gallery = () => {
  return (
    <div className="mb-24">
      <Navbar />
      <PageTitle subheading="" heading="Gallery" />
      <Slider />
    </div>
  );
};

export default gallery;
