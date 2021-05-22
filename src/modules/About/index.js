import React from 'react';
import ApplicationWrapper from '../../container/Application';
import AboutDetails from './About';

const AboutComponent = () => {
  return (
    <div style={{ backgroundColor: '#969595' }}>
      <ApplicationWrapper>
        <AboutDetails />
      </ApplicationWrapper>
    </div>
  );
};
export default AboutComponent;
