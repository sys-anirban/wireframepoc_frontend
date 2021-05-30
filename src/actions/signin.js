import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const signin = (loginCredentials) => {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_IN });
    return axios
      .post(`${apiUrl}${endPoints().signinurl}`, loginCredentials)
      .then((res) => {
        const { token, isUserAuthenticated, emailid } = res.data;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('authenticated', isUserAuthenticated);
        sessionStorage.setItem('emailid', emailid);
        dispatch({ type: actions.RECEIVE_SIGN_IN, payload: { isUserAuthenticated, token } });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_SIGN_IN, payload: error.response.data });
      });
  };
};
