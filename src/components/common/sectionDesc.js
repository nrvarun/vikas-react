import React from 'react';

import PropTypes from 'prop-types';

const SectionDescription = (props) => {
  return (
    <p className="section-desc">
      {props.desc}
    </p>
  );
};

SectionDescription.propTypes = {
  desc: PropTypes.string,
};

SectionDescription.defaultProps = {
  desc: '',
};

export default SectionDescription;
