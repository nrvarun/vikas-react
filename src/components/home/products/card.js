import React from 'react';

import PropTypes from 'prop-types';

import ProductImg from '../../../assets/img/product-1.png';

const ProductCard = (props) => {
  return (
    <div className={props.classes ? props.classes : 'product-card'}>
      <h3 className="product-card__heading">HI-Tech <span>Batteries</span></h3>
      <p className="product-card__sub-heading">Jumbo Tubular</p>
      <div className="product-card__img-wrapper">
        <img className="product-card__img" src={ProductImg} alt="Product" />
      </div>
      <div className="product-card__actions mb-3">
        <button className="button button--yellow">more details</button>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  classes: PropTypes.string,
};

ProductCard.defaultProps = {
  classes: 'product-card',
};
