import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchuserdetails } from '../../actions/userdetails';
import { fetchofficialdetails } from '../../actions/officialdetails';
import Loader from '../../components/Loader';

const Wrapper = styled.div`
  background-color: #b8b894;
  height: 420px;
  margin-top: 10px;
  border-radius: 5px;
  position: relative;
  .skills {
    position: absolute;
    bottom: 10%;
    left: 25%;
    width: 70%;
    .skilladdpara {
      margin-bottom: 0px;
      font-weight: 500;
      font-size: 15px;
    }
    .skill_select {
      margin-right: 10px;
      height: 30px;
      border-radius: 3px;
      height: 40px;
      width: 15%;
    }
    .skill_input {
      margin-left: 10px;
      margin-right: 10px;
      height: 30px;
      border-radius: 5px;
      width: 50%;
      height: 40px;
      margin-top: 5px;
    }
    .skill_button {
      margin-left: 10px;
    }
  }
  .imageWrapper {
    width: 15%;
    img {
      height: 150px;
      border-radius: 5px;
      margin: 10px 0 0 10px;
    }
  }
  .detailsWrapper {
    position: absolute;
    left: 20%;
    top: 5%;
    width: 70%;
    .username {
      margin-bottom: 0px;
      font-weight: bold;
      font-size: 18px;
    }
    .accountbalance {
      font-weight: bold;
      font-size: 18px;
      color: #7c1b07;
    }
    .customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      position: absolute;
      left: 5%;
      td,
      th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4caf50;
        color: white;
        text-align: center;
      }
      td {
        font-weight: bold;
      }
    }
  }
`;
class UserDetails extends React.Component {
  state = {
    skillname: '',
    skilltype: 'primary',
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  async componentDidMount() {
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
              }}
            >
              <select
                id="sel1"
                name="skilltype"
                value={skilltype}
                onChange={this.changeHandler}
                className="skill_select"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
              <input name="skillname" value={skillname} onChange={this.changeHandler} className="skill_input" />
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
})(UserDetails);
