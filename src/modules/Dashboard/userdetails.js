import React from 'react';
import { connect } from 'react-redux';
import { fetchuserdetails } from '../../actions/userdetails';
import { fetchofficialdetails, updateskillset } from '../../actions/officialdetails';
import Loader from '../../components/Loader';
import { Wrapper } from './styled';

class UserDetails extends React.Component {
  state = {
    skillname: '',
    skilltype: 'pskill',
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    this.props.fetchuserdetails();
    this.props.fetchofficialdetails();
  }
  render() {
    const { skillname, skilltype } = this.state;
    //userdetails reducer
    const { userdetails, isFetchingUserdetails } = this.props.userdetails;
    const { fname, mname, lname, image, houseno, city, poffice, landmark, state, pin } = userdetails;

    //officialdetails reducer
    const { officialdetails, isFetchingOfficialdetails } = this.props.officialdetails;
    const { empcode, manager, memail, pskill, sskill } = officialdetails;

    const name = fname + ' ' + mname + ' ' + lname;
    const address = houseno + ', ' + city + ', ' + poffice + ', ' + landmark + ', ' + state + ', ' + pin;
    if (isFetchingUserdetails || isFetchingOfficialdetails) {
      return <Loader />;
    }
    return (
      <Wrapper>
        <div className="imageWrapper">
          <img src={image} />
        </div>
        <div className="detailsWrapper">
          <p className="username">{`Welcome ${name} !`}</p>
          <p>Last Login: 04 Feb 2021</p>
          <p className="accountbalance">
            Manager: <span>{manager}</span>
          </p>
          <table className="customers">
            <tr>
              <th>Emp Code</th>
              <th>Address</th>
              <th>Primary Skill</th>
              <th>Secondary Skill</th>
              <th>Manager</th>
            </tr>
            <tr>
              <td>{empcode}</td>
              <td>{address}</td>
              <td>{pskill}</td>
              <td>{sskill}</td>
              <td>{memail}</td>
            </tr>
          </table>
        </div>
        <div className="skills">
          <p className="skilladdpara">Want to add new skill in your profile ?</p>
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.props.updateskillset(skilltype, skillname);
              }}
            >
              <select
                id="sel1"
                name="skilltype"
                value={skilltype}
                onChange={this.changeHandler}
                className="skill_select"
              >
                <option value="pskill">Primary</option>
                <option value="sskill">Secondary</option>
              </select>
              <input
                name="skillname"
                value={skillname}
                onChange={this.changeHandler}
                className="skill_input"
                placeholder="Type your New Skill here "
              />
              <button className="btn btn-info skill_button" type="submit" style={{ verticalAlign: 'initial' }}>
                Add
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default connect((state) => ({ userdetails: state.userdetails, officialdetails: state.officialdetails }), {
  fetchuserdetails,
  fetchofficialdetails,
  updateskillset,
})(UserDetails);
