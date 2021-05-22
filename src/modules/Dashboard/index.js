import React from 'react';
import ApplicationWrapper from '../../container/Application';
import UserDetails from './userdetails';
const DashBoard = () => {
  return (
    <div style={{ backgroundColor: '#969595' }}>
      <ApplicationWrapper>
        <UserDetails />
      </ApplicationWrapper>
    </div>
  );
};
export default DashBoard;
