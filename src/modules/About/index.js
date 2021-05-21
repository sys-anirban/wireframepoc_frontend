import React, { Component } from 'react';
import NavbarComponent from '../../components/Navbar';

class AboutComponent extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <div>
        <NavbarComponent pathname={pathname} />
        <p>About Component</p>
      </div>
    );
  }
}
export default AboutComponent;
