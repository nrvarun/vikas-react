import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../assets/img/logo.png';
// import NavLink from './nav-link/index';

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    return window.addEventListener('scroll', debounce(this.handleScroll, 16));
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 16));
  }

  toggleSideNav = () => {
    console.log('is it triggering');
    this.props.toggleMenu();
  }

  handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  }

  render() {
    // !! coerces value to be a Boolean
    // we want it to be true or false (true if scrollPositionY> 0)
    // it works because scrollPositionY=== 0 is falsy
    const isScrolling = !!this.state.scrollPositionY;
    const isActive = this.props.currentState;

    return (
      <header>
        <div className={isScrolling ? 'navbar active' : 'navbar'}>
          <Link to="/" className="navbar-brand">
            <img className="navbar-logo" src={logo} alt="logo" />
          </Link>
          <div className="navmenu-wrapper">
            <button className={isActive ? 'navmenu-toggle active d-md-none' : 'navmenu-toggle d-md-none'} onClick={this.toggleSideNav}>
              <span className="navmenu-toggle__line">1</span>
              <span className="navmenu-toggle__line">2</span>
              <span className="navmenu-toggle__line">3</span>
            </button>
            <ul className="navbar-nav d-none d-md-flex">
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
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  currentState: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

