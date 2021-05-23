import styled from 'styled-components';

export const Wrapper = styled.div`
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
