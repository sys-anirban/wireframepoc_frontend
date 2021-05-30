import React from 'react';
import styled from 'styled-components';
import { fetchDescriptions } from '../../actions/description';
import { connect } from 'react-redux';
const Wrapper = styled.div`
  background-color: #b8b894;
  height: 420px;
  margin-top: 10px;
  border-radius: 5px;
  overflow-y: auto;
  .content {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
class AboutDetails extends React.Component {
  // componentDidMount() {
  //   this.props.fetchDescriptions();
  // }
  render() {
    return (
      <Wrapper>
        <div className="content">
          <h3 style={{ textAlign: 'center', paddingTop: '5px' }}>Node JS Introduction</h3>
          <h4 style={{ marginLeft: '10px' }}>What is Node JS?</h4>
          <ul>
            <li>Node JS is an open source server environment</li>
            <li>Node JS is free</li>
            <li>Node JS runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
            <li>Node JS uses JavaScript on the server</li>
          </ul>
          <h4>Why Node JS?</h4>
          <p>
            A common task for a web server can be to open a file on the server and return the content to the client.
            Here is how PHP or ASP handles a file request:
          </p>
          <ol>
            <li>Sends the task to the computer's file system.</li>
            <li>Waits while the file system opens and reads the file</li>
            <li>Returns the content to the client.</li>
            <li>Ready to handle the next request.</li>
          </ol>
          <h4>What Can Node JS Do?</h4>
          <ul>
            <li>Node JS can generate dynamic page content</li>
            <li>Node JS can create, open, read, write, delete, and close files on the server</li>
            <li>Node JS can collect form data</li>
            <li>Node JS can add, delete, modify data in your database</li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
export default connect((state) => ({}), { fetchDescriptions })(AboutDetails);
