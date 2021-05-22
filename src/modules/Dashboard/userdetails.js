import React from 'react';
import styled from 'styled-components';

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
  render() {
    const { skillname, skilltype } = this.state;
    return (
      <Wrapper>
        <div className="imageWrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        </div>
        <div className="detailsWrapper">
          <p className="username">Welcome Anirban Ghatak !</p>
          <p>Last Login: 04 Feb 2021</p>
          <p className="accountbalance">
            Manager: <span>Alexsandra Relaniq</span>
          </p>
          <table className="customers">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Primary Skill</th>
              <th>Secondary Skill</th>
              <th>Manager</th>
            </tr>
            <tr>
              <td>Anirban Ghatak</td>
              <td>B Complex,Serasole,Raniganj,Paschim Bardhaman,713358</td>
              <td>React JS</td>
              <td>Express JS,Mongo DB,IIS 7,MS Azure</td>
              <td>abcd@xyz.com</td>
            </tr>
          </table>
        </div>
        <div className="skills">
          <p className="skilladdpara">Want to add new skill in your profile ?</p>
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log('e', this.state);
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
export default UserDetails;
