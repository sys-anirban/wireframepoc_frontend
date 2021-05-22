import React from 'react';
import ApplicationWrapper from '../../container/Application';
import UserDetails from './userdetails';
const DashBoard = () => {
  return (
    <div>
      <ApplicationWrapper>
        <UserDetails />
      </ApplicationWrapper>
    </div>
  );
};
export default DashBoard;
