import React, { Component } from 'react';
import LoginComponent from '../modules/Signin/index';
import DashboardComponent from '../modules/Dashboard/index';
import AboutComponent from '../modules/About/index';
import TeamComponent from '../modules/Team/index';
import Signup from '../modules/Signup/index';
import VerifyOTPComponent from '../modules/VerifyOTP/index';
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
    } else {
      if (page === 'signup') {
        return <Signup />;
      } else if (page === 'verifyotp') {
        return <VerifyOTPComponent />;
      }
    }
    return <LoginComponent />;
  }
}
export default connect((state) => ({ componentHandler: state.componentHandler, signinReducer: state.signin }))(Board);
