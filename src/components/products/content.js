import React from 'react';

import ProductHeading from './productHeading';
import ProductDesc from './productDesc';

import ProductImg from './productImg';

const Content = () => {
  return (
    <section className="products">
      <div className="container product-container">
        <div className="row mb-5">
          <div className="col-sm-7 product-data-wrapper text-left">
            <ProductHeading heading="Long Life" icon="../assets/img/product-icon.png" />
            <ProductDesc desc="The following features contribute to long life of Batteries :" />
            <p className="product-desc">
              <span className="mx-1">GRID</span>
              - Is made out of a special alloy of lead to combat corrosion
            </p>
            <p className="product-desc">
              <span className="mx-1">SEPARATORS</span>
              - Microporous Separators made from selected PVC resins
              are employed in the production, Separators possess good
               acid & temperature resistance, mechanical strength and low internal resistance.
            </p>
          </div>
          <div className="col-sm-5 product-img-wrapper text-center">
            <ProductImg img="./assets/img/product-img.png" />
          </div>
        </div>
        <div className="row mb-5 flex-column-reverse flex-sm-row">
          <div className="col-sm-5 product-img-wrapper text-center">
            <img className="img-fluid" src="./assets/img/product-img.png" alt="product" />
          </div>
          <div className="col-sm-7 text-left product-data-wrapper">
            <ProductHeading heading="More Power" icon="./assets/img/product-icon.png" />
            <ProductDesc desc="Maximum electrical power is obtained due to their very precise design parameters. During the preparation of plates, absolute controls are exercised to get optimum results of electrochemical reactions. Deep discharge abilities of batteries are demonstrated due to the selection of special expanders in the mixing of the paste." />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-7 product-data-wrapper text-left">
            <ProductHeading heading="Minimum Maintenance" icon="../assets/img/product-icon.png" />
            <ProductDesc desc="Hi Tech batteries give trouble-free performance with minimum maintenance for many long years." />
          </div>
          <div className="col-sm-5 product-img-wrapper text-center">
            <ProductImg img="./assets/img/product-img.png" />
          </div>
        </div>
        <div className="row mb-5 flex-column-reverse flex-sm-row">
          <div className="col-sm-5 product-img-wrapper text-center">
            <ProductImg img="./assets/img/product-img.png" />
          </div>
          <div className="col-sm-7 text-left product-data-wrapper">
            <ProductHeading heading="Quality Control" icon="../assets/img/product-icon.png" />
            <ProductDesc desc="The raw materials for the production of HI-TECH batteries are subject to rigorous laboratory tests for checking conformity to standards. Further stringent tests are carried out at every stage of manufacture to ensure uniformity of process parameters." />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-7 text-left product-data-wrapper">
            <ProductHeading heading="Warranty" icon="../assets/img/product-icon.png" />
            <ProductDesc desc="Hi Tech Batteries are bundled with a warranty package of THREE years against all its manufacturing defects and premature failures, though the life expectancy of the batteries are much more than three years when maintained properly." />
          </div>
          <div className="col-sm-5 product-img-wrapper text-center">
            <ProductImg img="./assets/img/product-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
