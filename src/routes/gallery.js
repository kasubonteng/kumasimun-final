import React from 'react';

import Navbar from '../components/NavbarSecondary';
import PageTitle from '../components/PageTitle';
import Gallery from '../sections/Gallery/Gallery';

const gallery = () => {
  return (
    <div className="mb-24">
      <Navbar />
      <PageTitle subheading="" heading="Gallery" />
      {/* <Slider /> */}
      <Gallery />
    </div>
  );
};

export default gallery;
