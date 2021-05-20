import React, { Component } from 'react';
import styled from 'styled-components';
import { signin } from '../../actions/signin';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import { Field } from 'formik';

const Wrapper = styled.div`
  height: 200px;
  position: relative;
  margin-top: 50px;
  label {
    font-weight: bold;
  }
  p {
    font-weight: bold;
    color: red;
    text-align: center;
  }
`;
const Button = styled.button`
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  background-color: teal;
  border-color: #005cbf;
  margin-top: 20px;
  position: absolute;
  left: 47%;
`;
class Signin extends Component {
  render() {
    const {
      signinReducerData: { isLoading, isUserAuthenticated, isInvalid },
    } = this.props;
    const initialValues = { username: '', password: '' };

    if (isLoading) {
      return <p>Loading</p>;
    }
    return (
      <Wrapper>
        {isInvalid && <p>Invalid credentials</p>}
        <Form initialValues={initialValues} onSubmit={(values) => this.props.signin(values)} enableReinitialize={true}>
          <div className="row">
            <div className="col-2" />
            <div className="col-4">
              <label>User Name</label>
              <Field name="username" type="text" placeholder="User Name" className="form-control" />
            </div>
            <div className="col-4">
              <label>Password</label>
              <Field name="password" type="password" placeholder="Password" className="form-control" />
            </div>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    );
  }
}
export default connect((state) => ({ signinReducerData: state.signin }), { signin })(Signin);
