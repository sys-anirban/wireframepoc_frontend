import React, { Component } from 'react';
import styled from 'styled-components';
import UnderDevelopmentImage from '@assets/underdevelopment.jpg';

const Wrapper = styled.div`
  color: red;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;
class DashBoard extends Component {
  render() {
    return (
      <Wrapper>
        <p>Under Development</p>
        <img src={UnderDevelopmentImage} alt="Under Development Image" />
      </Wrapper>
    );
  }
}
export default DashBoard;
