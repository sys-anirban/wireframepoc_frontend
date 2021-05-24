import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #b8b894;
  height: 420px;
  margin-top: 10px;
  border-radius: 5px;
  position: relative;
  .customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    position: absolute;
    left: 25%;
    top: 20px;
    width: 50%;
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
      text-align: center;
    }
  }
`;
