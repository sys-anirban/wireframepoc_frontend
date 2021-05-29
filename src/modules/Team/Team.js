import React from 'react';
import { fetchTeamDetails } from '../../actions/teammembers';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { Wrapper } from './styled';

class TeamDetails extends React.Component {
  componentDidMount() {
    this.props.fetchTeamDetails();
  }
  render() {
    const {
      teamDetails: { isLoadingTeamdetails, teammembers },
    } = this.props;
    if (isLoadingTeamdetails) {
      <Loader />;
    }
    return (
      <div>
        <Wrapper>
          <table className="customers">
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
            {teammembers.map((member) => (
              <tr>
                <td>{member.name}</td>
                <td>{member.work}</td>
              </tr>
            ))}
          </table>
        </Wrapper>
      </div>
    );
  }
}
export default connect((state) => ({ teamDetails: state.teamdetails }), { fetchTeamDetails })(TeamDetails);
