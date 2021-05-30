import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { changeComponent } from './componentHandler';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const signup = (details) => {
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_SIGN_UP });
    return axios
      .post(`${apiUrl}${endPoints().signupurl}`, { body: details })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_SIGN_UP, payload: { details } });
        dispatch(changeComponent('verifyotp'));
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_SIGN_IN });
      });
  };
};
