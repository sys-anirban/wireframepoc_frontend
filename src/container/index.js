import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import LoginPage from '../modules/Signin/index';
import AdminDashBoard from '../modules/DashBoard/index';

class Dashboard extends Component {
  render() {
    const {
      signinReducerData: { requestSignin },
    } = this.props;

    if (requestSignin) {
      return <Loader />;
    }

    return <LoginPage />;
  }
}
export default connect((state) => ({ signinReducerData: state.signin, verifyOTPReducerData: state.verifyOTP }))(
  Dashboard,
);
