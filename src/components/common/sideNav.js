import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom = (e) => {
    e.preventDefault();
    const SideBar = document.querySelector('.sidenav');

    if (SideBar.classList.contains('show')) {
      SideBar.classList.remove('show');
      document.querySelector('.navmenu-toggle').classList.remove('active');
      document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <aside className={this.props.data}>
        <ul className="navbar-nav d-md-none">
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
            <NavLink exact className="nav-link" activeClassName="active" to="/products">
              <span data-linktitle="products">
              products
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={'#'.toString()} onClick={this.scrollToBottom}>
              <span data-linktitle="contact us">
              contact us
              </span>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideNav;

SideNav.propTypes = {
  data: PropTypes.string,
};
