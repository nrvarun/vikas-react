import React from 'react';

import PropTypes from 'prop-types';

const ProductImg = (props) => {
  return (
    <img className="img-fluid" src={props.img} alt="product" />
  );
};

ProductImg.propTypes = {
  img: PropTypes.string,
};

export default ProductImg;
