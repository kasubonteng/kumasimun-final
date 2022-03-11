import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>KUMASI MUN</title>
      <meta
        name="description"
        content="International Model United Nations Conference Held In Kumasi Ghana"
      />
      <meta
        name="keywords"
        content="Model United Nations, Kumasi International Model United Nations, International Model United Nations Conference"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Kumasi International Model United Nations Conference"
      />
      <meta
        property="og:description"
        content="International Model United Nations Conference In Kumasi Ghana"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
