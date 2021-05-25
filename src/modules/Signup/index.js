import React, { Component } from 'react';
import { Wrapper, Button } from './styled';
import Form from '../../components/Form/Form';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../actions/signup';
import { connect } from 'react-redux';
// import FilePicker from '../../components/FilePicker/FilePicker';
// import { generateBase64FromImage } from '../../utils/index';
// import Image from '../../components/image/index';

const signupValidation = Yup.object().shape({
  // emailid: Yup.string().email('Invalid email').required('Required'),
  // password: Yup.string().min(8, 'Too Short!').max(20, 'Too Long!').required('Password is Required'),
});

class SignUpComponent extends Component {
  // state = {
  //   imagePreview: null,
  // };

  // postInputChangeHandler = (files) => {
  //   generateBase64FromImage(files[0])
  //     .then((b64) => {
  //       this.setState({ imagePreview: b64 });
  //     })
  //     .catch((e) => {
  //       this.setState({ imagePreview: null });
  //     });
  // };
  onSubmitForm = (values) => {
    // const formData = new FormData();
    // Object.keys(values).forEach((value) => {
    //   formData.append(value, values[value]);
    // });
    // formData.append('image', file);
    this.props.signup(values);
  };
  render() {
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
    return (
      <Wrapper>
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
            {/* <div className="col-3">
              <div className="col-10">
                <FilePicker id="image" label="Image" control="input" onChange={this.postInputChangeHandler} />
                <div className="new-post__preview-image">
                  {!this.state.imagePreview && <p>Please choose an image.</p>}
                  {this.state.imagePreview && <Image imageUrl={this.state.imagePreview} contain left />}
                </div>
              </div>
            </div> */}
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Wrapper>
    );
  }
}
export default connect((state) => ({}), { signup })(SignUpComponent);
