import React from 'react';

import PropTypes from 'prop-types';

import ProductIcon from '../../assets/img/product-icon.png';

const ProductHeading = (props) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <img className="product-icon mr-2" src={ProductIcon} alt="" />
      <h2 className="product-heading">
        { props.heading }
      </h2>
    </div>
  );
};

export default ProductHeading;

ProductHeading.propTypes = {
  // icon: PropTypes.string,
  heading: PropTypes.string,
};
