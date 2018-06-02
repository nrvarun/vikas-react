import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const NavLinkItem = (props) => {
  return (
    <Link className="nav-link" to={props.href}>
      <span data-linktitle={props.content}>
        {props.content}
      </span>
    </Link>
  );
};


export default NavLinkItem;

NavLinkItem.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string,
};

NavLinkItem.defaultProps = {
  href: false,
  content: false,
};
