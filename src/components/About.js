import React from 'react';

import Layout from './Layout';
import Banner from './about/banner';
import About from './about/about';

class AboutUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Banner />
        <About />
      </Layout>
    );
  }
}

export default AboutUs;
