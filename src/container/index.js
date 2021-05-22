import React, { Component } from 'react';
import LoginComponent from '../modules/Signin/index';
import DashboardComponent from '../modules/Dashboard/index';
import AboutComponent from '../modules/About/index';
import TeamComponent from '../modules/Team/index';
import { connect } from 'react-redux';

class Board extends Component {
  render() {
    const {
      componentHandler: { page },
      signinReducer: { isUserAuthenticated },
    } = this.props;
    if (isUserAuthenticated) {
      switch (page) {
        case 'dashboard':
          return <DashboardComponent />;
        case 'about':
          return <AboutComponent />;
        case 'team':
          return <TeamComponent />;
      }
    }
    return <LoginComponent />;
  }
}
export default connect((state) => ({ componentHandler: state.componentHandler, signinReducer: state.signin }))(Board);
