import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  return (
    <div className="banner-content">
      <h3 className="banner-content__data">
        {props.content}
        <span>{props.highlight}</span>
      </h3>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  content: PropTypes.string,
  highlight: PropTypes.string,
};

Slide.defaultProps = {
  content: '',
  highlight: '',
};
