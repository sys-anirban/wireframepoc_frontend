import React, { Component } from 'react';
import Logo from './Logo';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  background-color: teal;
  height: 100px;
  padding-top: 7px;
  img {
    height: 86px;
    width: 363px;
  }
`;
const HeaderLogo = styled.div``;
class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
      </Wrapper>
    );
  }
}
export default Header;
