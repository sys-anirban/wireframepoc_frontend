import React, { Component } from 'react';
import styled from 'styled-components';
import { signin } from '../../actions/signin';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import { Field, ErrorMessage } from 'formik';
import Loader from '../../components/Loader';
import * as Yup from 'yup';

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

const loginValidation = Yup.object().shape({
  emailid: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!').required('Password is Required'),
});

class Signin extends Component {
  render() {
    const {
      signinReducerData: { isLoading, isInvalid },
    } = this.props;
    const initialValues = { emailid: '', password: '' };

    if (isLoading) {
      return <Loader />;
    }
    return (
      <Wrapper>
        {isInvalid && (
          <div style={{ backgroundColor: '#b1b481' }}>
            <p style={{ color: 'white' }}>Invalid credentials</p>
          </div>
        )}
        <Form
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={(values) => this.props.signin(values)}
          enableReinitialize={true}
        >
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <label>Email Id</label>
                  <Field name="emailid" type="text" placeholder="Email Id" className="form-control" />
                  <ErrorMessage name="emailid">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-6">
                  <label>Password</label>
                  <Field name="password" type="password" placeholder="Password" className="form-control" />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div>
                        <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                          {msg}
                        </p>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    );
  }
}
export default connect((state) => ({ signinReducerData: state.signin }), { signin })(Signin);
