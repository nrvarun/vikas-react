import React from 'react';

import Layout from './Layout';
import Banner from './products/banner';
import Content from './products/content';

class Products extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Banner />
        <Content />
      </Layout>
    );
  }
}

export default Products;
