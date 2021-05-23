import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export const fetchofficialdetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_OFFICIAL_DETAILS });
    return apiClient
      .get(`${endPoints().officialdetailsurl}?emailid=${emailid}`)
      .then((res) => {
        dispatch({ type: actions.RECEIVE_OFFICIAL_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_FETCH_OFFICIAL_DETAILS });
      });
  };
};
