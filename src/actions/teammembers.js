import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export const fetchTeamDetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_TEAM_DETAILS });
    return apiClient
      .get(`${endPoints().teamdetails}`, { headers: { emailid } })
      .then((res) => {
        console.log('res', res.data);
        dispatch({ type: actions.RECEIVE_TEAM_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_FETCH_TEAM_DETAILS });
      });
  };
};
