import React from 'react';

import Layout from './Layout';
import Banner from './about/banner';
import About from './about/about';

const AboutUs = () => {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  );
};

export default AboutUs;
