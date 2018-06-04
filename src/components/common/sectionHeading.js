import React from 'react';

import PropTypes from 'prop-types';

const SectionHeading = (props) => {
  return (
    <h2 className={props.classes ? props.classes : 'section-heading'}>
      {props.heading}
    </h2>
  );
};

SectionHeading.propTypes = {
  classes: PropTypes.string,
  heading: PropTypes.string,
};

SectionHeading.defaultProps = {
  classes: '',
  heading: '',
};

export default SectionHeading;
