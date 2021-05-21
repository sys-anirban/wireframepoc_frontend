import React, { Component } from 'react';
import NavbarComponent from '../../components/Navbar';

class TeamComponent extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <div>
        <NavbarComponent pathname={pathname} />
        <p>Team Component</p>
      </div>
    );
  }
}
export default TeamComponent;
