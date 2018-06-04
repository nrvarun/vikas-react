import React from 'react';

import SectionHeading from '../common/sectionHeading';
import ProductCard from './products/card';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-3">
            <SectionHeading heading="products" />
          </div>
          <div className="col-sm-12">
            <div className="products-wrapper">
              <ProductCard classes="product-card one active" />
              <ProductCard classes="product-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
