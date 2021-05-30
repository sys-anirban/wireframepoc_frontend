import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const fetchuserdetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  const token = sessionStorage.getItem('token');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_USER_DETAILS });
    return axios
      .get(`${apiUrl}${endPoints().userdetailsurl}`, {
        headers: { emailid, Authorization: token ? `Bearer ${token}` : null },
      })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_USER_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_FETCH_USER_DETAILS });
      });
  };
};
