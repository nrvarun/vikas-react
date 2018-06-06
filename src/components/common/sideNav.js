import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SideNav = (props) => {
  return (
    <aside className={props.data}>
      <ul className="navbar-nav m-auto d-md-none">
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/">
            <span data-linktitle="home">
              home
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/about">
            <span data-linktitle="about">
            about
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href={'#'.toString()} onClick={(e) => { e.preventDefault(); }}>
            <span data-linktitle="products">
            products
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href={'#'.toString()} onClick={(e) => { e.preventDefault(); }}>
            <span data-linktitle="contact us">
            contact us
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;

SideNav.propTypes = {
  data: PropTypes.string,
};
