import React, { Fragment } from 'react';
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
