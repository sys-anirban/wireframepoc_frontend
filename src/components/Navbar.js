import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeComponent } from '../actions/componentHandler';

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  span {
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
    const {
      componentHandler: { page },
    } = this.props;
    return (
      <Wrapper>
        <span className={page === 'dashboard' ? 'active' : ''} onClick={() => this.props.changeComponent('dashboard')}>
          Dashboard
        </span>
        <span className={page === 'about' ? 'active' : ''} onClick={() => this.props.changeComponent('about')}>
          About
        </span>
        <span className={page === 'team' ? 'active' : ''} onClick={() => this.props.changeComponent('team')}>
          Team
        </span>
      </Wrapper>
    );
  }
}
export default connect((state) => ({ componentHandler: state.componentHandler }), { changeComponent })(NavbarComponent);
