import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Button } from './styled';
import Form from '../../components/Form/Form';
import { Field } from 'formik';
import { verifyOTP } from '../../actions/verifyOTP';
import Loader from '../../components/Loader';
import { changeComponent } from '../../actions/componentHandler';

class VerifyOTP extends Component {
  render() {
    const initialValues = { otp: null };
    const { isLoadingverifyOTP, isSuccessverifyOTP, iaFailedisFailedverifyOTP, isverifiedOTP } =
      this.props.verifyOTPData;

    const {
      signupData: { emailid },
    } = this.props.signupReducerData;

    if (isLoadingverifyOTP) {
      return <Loader />;
    }
    if (iaFailedisFailedverifyOTP) {
      <div style={{ backgroundColor: '#b1b481' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>Something went wrong , please try again !</p>
      </div>;
    }
    if (isSuccessverifyOTP && isverifiedOTP) {
      return (
        <div style={{ backgroundColor: '#0aab53' }}>
          <p style={{ color: 'white', textAlign: 'center' }}>
            OTP verified !
            <button className="btn btn-primary m-2" onClick={() => this.props.changeComponent('dashboard')}>
              Login now
            </button>
          </p>
        </div>
      );
    }
    return (
      <Wrapper>
        {isSuccessverifyOTP && !isverifiedOTP && (
          <div style={{ backgroundColor: '#b1b481' }}>
            <p style={{ color: 'white', textAlign: 'center' }}>Invalid OTP Try again</p>
          </div>
        )}
        <Form
          initialValues={initialValues}
          onSubmit={(values) => {
            this.props.verifyOTP(values.otp, emailid);
          }}
          enableReinitialize={true}
        >
          <div className="row">
            <div className="col-4" />
            <div className="col-4">
              <label>
                <span>Please enter the OTP sent in Email</span>
              </label>
              <Field name="otp" type="text" placeholder="Enter the OTP" class="form-control" />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    );
  }
}
export default connect(({ verifyOTP, signup }) => ({ verifyOTPData: verifyOTP, signupReducerData: signup }), {
  verifyOTP,
  changeComponent,
})(VerifyOTP);
