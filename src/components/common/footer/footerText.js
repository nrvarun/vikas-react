import React from 'react';

import PropTypes from 'prop-types';

const FooterText = (props) => {
  return (
    <p className="footer__text">
      {props.text}
    </p>
  );
};

export default FooterText;

FooterText.propTypes = {
  text: PropTypes.string,
};

FooterText.defaultProps = {
  text: '',
};
