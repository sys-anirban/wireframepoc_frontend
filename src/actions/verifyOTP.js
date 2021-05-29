import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export const verifyOTP = (otp, emailid) => {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_VERIFY_OTP });
    return apiClient
      .get(`${endPoints().verifyotp}`, { headers: { emailid, otp } })
      .then((res) => {
        dispatch({ type: actions.RECEIVED_VERIFY_OTP, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_VERIFY_OTP });
      });
  };
};
