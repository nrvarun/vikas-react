import React from 'react';

import Header from './common/header/index';
import Footer from './common/footer';
import SideNav from './common/sideNav';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavState: false,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState({
      sideNavState: !this.state.sideNavState,
    });
  }

  render() {
    const menuState = this.state.sideNavState;

    return (
      <main>
        <Header currentState={menuState} toggleMenu={this.toggleSideNav} />
        <SideNav data={menuState ? 'sidenav show' : 'sidenav'} />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default Layout;
