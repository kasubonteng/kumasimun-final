import React from 'react';

import Navbar from '../components/NavbarSecondary';
import PageTitle from '../components/PageTitle';
import Gallery from '../sections/Gallery/Gallery';

const gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <PageTitle subheading="" heading="Gallery" />
        {/* <Slider /> */}
        <Gallery />
      </div>
    </div>
  );
};

export default gallery;
