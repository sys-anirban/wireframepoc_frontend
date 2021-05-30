import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const fetchTeamDetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  const token = sessionStorage.getItem('token');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_TEAM_DETAILS });
    return axios
      .get(`${apiUrl}${endPoints().teamdetails}`, {
        headers: { emailid, Authorization: token ? `Bearer ${token}` : null },
      })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_TEAM_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_FETCH_TEAM_DETAILS });
      });
  };
};
