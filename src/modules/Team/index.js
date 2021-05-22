import React from 'react';
import ApplicationWrapper from '../../container/Application';
import TeamDetails from './Team';

const TeamComponent = () => {
  return (
    <div style={{ backgroundColor: '#969595' }}>
      <ApplicationWrapper>
        <TeamDetails />
      </ApplicationWrapper>
    </div>
  );
};
export default TeamComponent;
