import React, { Component } from 'react';
import NavbarComponent from '../../components/Navbar';

class DashBoard extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <div>
        <NavbarComponent pathname={pathname} />
        <p>DashBoard Component</p>
      </div>
    );
  }
}
export default DashBoard;
