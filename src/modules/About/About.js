import React from 'react';
import styled from 'styled-components';
import { fetchDescriptions } from '../../actions/description';
import { connect } from 'react-redux';
const Wrapper = styled.div`
  background-color: #b8b894;
  height: 420px;
  margin-top: 10px;
  border-radius: 5px;
`;
class AboutDetails extends React.Component {
  componentDidMount() {
    this.props.fetchDescriptions();
  }
  render() {
    return (
      <div>
        <Wrapper>
          <p>About</p>
        </Wrapper>
      </div>
    );
  }
}
export default connect((state) => ({}), { fetchDescriptions })(AboutDetails);
