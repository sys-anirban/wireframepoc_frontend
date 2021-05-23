import actions from '../components/constants/actionTypes';
import apiClient from '../components/constants/apiClient';
import endPoints from '../components/constants/Config';

export const fetchuserdetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_USER_DETAILS });
    return apiClient
      .get(`${endPoints().userdetailsurl}?emailid=${emailid}`)
      .then((res) => {
        dispatch({ type: actions.RECEIVE_USER_DETAILS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_FETCH_USER_DETAILS });
      });
  };
};
