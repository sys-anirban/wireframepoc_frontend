import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export function signin(loginCredentials) {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_IN });
    return apiClient
      .post(`${endPoints().signinurl}`, loginCredentials)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        dispatch({ type: actions.RECEIVE_SIGN_IN, payload: res });
      })
      .catch((error) => dispatch({ type: actions.FAILED_SIGN_IN }));
  };
}
