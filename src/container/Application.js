import React, { Fragment } from 'react';
import Header from '../Header/index';
import Navbar from '../components/Navbar';

const ApplicationWrapper = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};
export default ApplicationWrapper;
