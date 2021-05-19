import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';
const host = process.env.Server_Url;
export function signin(loginCredentials) {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_IN });
    return apiClient
      .post(`${host}${endPoints().signinurl}`, loginCredentials)
      .then((res) => dispatch({ type: actions.RECEIVE_SIGN_IN, payload: { data: res.data } }))
      .catch((error) => dispatch({ type: actions.FAILED_SIGN_IN }));
  };
}
