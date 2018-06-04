import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  return (
    <div className="testimony">
      <div className="testimony__img-wrapper">
        <img className="testimony__img" src={props.img} alt="testimony" />
      </div>
      <h3 className="testimony__content">{props.content}</h3>
      <p className="testimony__author"> - By {props.author}</p>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  img: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

Slide.defaultProps = {
  img: '',
  content: '',
  author: '',
};
