import React from 'react';
// import { Link } from 'react-router-dom';

import Layout from './Layout';

import Banner from './home/banner';
import About from './home/about';
import Products from './home/products';
import Testimonials from './home/testimonials';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Products />
      <Testimonials />
    </Layout>
  );
};

export default Home;
