import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import LoginPage from '../modules/Signin/index';

class Dashboard extends Component {
  render() {
    // console.log('signinReducerData', this.props.signinReducerData);
    // const {
    //   signinReducerData: { isLoading },
    // } = this.props;

    // if (isLoading) {
    //   return <Loader />;
    // }

    return <LoginPage />;
  }
}
//export default connect((state) => ({ signinReducerData: state.signin }))(Dashboard);
export default Dashboard;
