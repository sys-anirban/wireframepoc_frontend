import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/dashboard" className={pathname === '/' ? `active` : ''}>
          Dashboard
        </NavLink>
        <NavLink to="/about" className={pathname === '/about' ? `active` : ''}>
          About
        </NavLink>
        <NavLink to="/team" className={pathname === '/team' ? `active` : ''}>
          Team
        </NavLink>
      </Wrapper>
    );
  }
}
export default NavbarComponent;
