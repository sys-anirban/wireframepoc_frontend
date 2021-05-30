import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const verifyOTP = (otp, emailid) => {
  const token = sessionStorage.getItem('token');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_VERIFY_OTP });
    return axios
      .get(`${apiUrl}${endPoints().verifyotp}`, {
        headers: { emailid, otp, Authorization: token ? `Bearer ${token}` : null },
      })
      .then((res) => {
        dispatch({ type: actions.RECEIVED_VERIFY_OTP, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_VERIFY_OTP });
      });
  };
};
