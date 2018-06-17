import React from 'react';

import PropTypes from 'prop-types';

const ProductDesc = (props) => {
  return (
    <p className="product-desc">
      { props.desc }
    </p>
  );
};

export default ProductDesc;

ProductDesc.propTypes = {
  desc: PropTypes.string,
};
