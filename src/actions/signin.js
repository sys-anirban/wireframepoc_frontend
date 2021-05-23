import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export const signin = (loginCredentials) => {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_IN });
    return apiClient
      .post(`${endPoints().signinurl}`, loginCredentials)
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
