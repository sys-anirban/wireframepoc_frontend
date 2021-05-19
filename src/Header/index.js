import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
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
const Header = () => {
  return <HeaderWrapper />;
};
export default Header;
