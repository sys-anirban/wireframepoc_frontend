import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';
import { changeComponent } from './componentHandler';

export const signup = (details) => {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_UP });
    return apiClient
      .post(`${endPoints().signupurl}`, { body: details })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_SIGN_UP, payload: { details } });
        dispatch(changeComponent('verifyotp'));
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_SIGN_IN });
      });
  };
};
