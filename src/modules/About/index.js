import React from 'react';
import ApplicationWrapper from '../../container/Application';
import AboutDetails from './About';

const AboutComponent = () => {
  return (
    <div>
      <ApplicationWrapper>
        <AboutDetails />
      </ApplicationWrapper>
    </div>
  );
};
export default AboutComponent;
