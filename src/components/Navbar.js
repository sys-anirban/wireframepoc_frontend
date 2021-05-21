import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: #ddd;
      color: black;
    }
    &.active {
      background-color: #04aa6d;
      color: white;
    }
  }
`;

class NavbarComponent extends Component {
  render() {
    const { pathname } = this.props;
    return (
      <Wrapper>
        <a href="/dashboard" className={pathname === '/' ? `active` : ''}>
          Dashboard
        </a>
        <a href="/about" className={pathname === '/about' ? `active` : ''}>
          About
        </a>
        <a href="/team" className={pathname === '/team' ? `active` : ''}>
          Team
        </a>
      </Wrapper>
    );
  }
}
export default NavbarComponent;
