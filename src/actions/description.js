import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const fetchDescriptions = () => {
  const emailid = sessionStorage.getItem('emailid');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_DESCRIPTION_DETAILS });
    return axios
      .get(`${apiUrl}${endPoints().descriptiondetails}`, { headers: { emailid } })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_DESCRIPTION_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FETCH_FAILED_DESCRIPTION_DETAILS });
      });
  };
};
