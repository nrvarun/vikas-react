import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';
import NavLink from './nav-link/index';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/" className="navbar-brand">
          <img className="navbar-logo" src={logo} alt="logo" />
        </Link>
        <div className="navmenu-wrapper">
          <ul className="navbar-nav d-none d-md-flex">
            <li className="nav-item active">
              <NavLink content="home" href="/" />
            </li>
            <li className="nav-item">
              <NavLink content="about" href="/about" />
            </li>
            <li className="nav-item">
              <NavLink content="products" href="/" />
            </li>
            <li className="nav-item">
              <NavLink content="contact us" href="/" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
