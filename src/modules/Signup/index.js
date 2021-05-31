import React, { Component } from 'react';
import { Wrapper, Button } from './styled';
import Form from '../../components/Form/Form';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../actions/signup';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { changeComponent } from '../../actions/componentHandler';

const signupValidation = Yup.object().shape({
  fname: Yup.string().required('First Name is Required'),
  mname: Yup.string('Should be string'),
  lname: Yup.string().required('Last Name is Required'),
  emailid: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Too short - should be 8 chars minimum.')
    .max(20, 'Too short - should be 8 chars minimum.')
    .required('Required'),
  cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  houseno: Yup.string().required('Required'),
  landmark: Yup.string().required('Required'),
  poffice: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  pin: Yup.string().required('Required'),
  empcode: Yup.string().min(6, 'Should be minimu 6 chars long'),
  manager: Yup.string().required('Required'),
  memail: Yup.string().email('Invalid email').required('Required'),
});

class SignUpComponent extends Component {
  onSubmitForm = (values) => {
    this.props.signup(values);
  };
  render() {
    const { signupReducer } = this.props;
    const initialValues = {
      fname: '',
      mname: '',
      lname: '',
      emailid: '',
      password: '',
      cpassword: '',
      houseno: '',
      landmark: '',
      poffice: '',
      city: '',
      state: '',
      pin: '',
      empcode: '',
      manager: '',
      memail: '',
    };
    if (signupReducer.isLoadingSignUp) {
      return <Loader />;
    }
    return (
      <Wrapper>
        {signupReducer.iaFailedSignUp && (
          <div style={{ backgroundColor: '#b1b481' }}>
            <p style={{ color: 'white' }}>Something went wrong , please try again !</p>
          </div>
        )}
        {signupReducer.isalreadyRegistered && (
          <div style={{ backgroundColor: '#0aab53' }}>
            <p style={{ color: 'white' }}>User is already registered, please contact admin</p>
          </div>
        )}

        <Form
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={(values) => this.onSubmitForm(values)}
          enableReinitialize={true}
        >
          <div className="row">
            <div className="col-1" />
            <div className="col">
              <div className="row">
                <div className="col-4">
                  <label>First Name</label>
                  <Field name="fname" type="text" placeholder="First Name" className="form-control" />
                  <ErrorMessage name="fname">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Middle Name</label>
                  <Field name="mname" type="text" placeholder="Middle Name" className="form-control" />
                  <ErrorMessage name="mname">
                    {(msg) => (
                      <div>
                        <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                          {msg}
                        </p>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Last Name</label>
                  <Field name="lname" type="text" placeholder="Last Name" className="form-control" />
                  <ErrorMessage name="lname">
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
              <div className="row">
                <div className="col-4">
                  <label>Email Id</label>
                  <Field name="emailid" type="text" placeholder="Email ID" className="form-control" />
                  <ErrorMessage name="emailid">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
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
                <div className="col-4">
                  <label>Confirm Password</label>
                  <Field name="cpassword" type="password" placeholder="Confirm Password" className="form-control" />
                  <ErrorMessage name="cpassword">
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
              <div className="row">
                <div className="col-4">
                  <label>House No:</label>
                  <Field name="houseno" type="text" placeholder="House No" className="form-control" />
                  <ErrorMessage name="houseno">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Land Mark</label>
                  <Field name="landmark" type="text" placeholder="Land mark" className="form-control" />
                  <ErrorMessage name="landmark">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Post Office</label>
                  <Field name="poffice" type="text" placeholder="Post Office" className="form-control" />
                  <ErrorMessage name="poffice">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label>City</label>
                  <Field name="city" type="text" placeholder="City" className="form-control" />
                  <ErrorMessage name="city">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>State</label>
                  <Field name="state" type="text" placeholder="State" className="form-control" />
                  <ErrorMessage name="state">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Pin Code</label>
                  <Field name="pin" type="text" placeholder="Pin Code" className="form-control" />
                  <ErrorMessage name="pin">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label>Emp Code</label>
                  <Field name="empcode" type="text" placeholder="Emp Code" className="form-control" />
                  <ErrorMessage name="empcode">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Manager Name</label>
                  <Field name="manager" type="text" placeholder="Manager Name" className="form-control" />
                  <ErrorMessage name="manager">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="col-4">
                  <label>Manager Email Id</label>
                  <Field name="memail" type="text" placeholder="Manager Email ID" className="form-control" />
                  <ErrorMessage name="memail">
                    {(msg) => (
                      <p style={{ color: 'red', fontWeight: 'normal' }} className="text-left">
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Wrapper>
    );
  }
}
export default connect((state) => ({ signupReducer: state.signup }), { signup, changeComponent })(SignUpComponent);
