import React from 'react';
import styled from 'styled-components';
import { fetchTeamDetails } from '../../actions/teammembers';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  background-color: #b8b894;
  height: 420px;
  margin-top: 10px;
  border-radius: 5px;
`;
class TeamDetails extends React.Component {
  componentDidMount() {
    this.props.fetchTeamDetails();
  }
  render() {
    return (
      <div>
        <Wrapper>
          <h3>Meet the Team</h3>
        </Wrapper>
      </div>
    );
  }
}
export default connect((state) => ({}), { fetchTeamDetails })(TeamDetails);
