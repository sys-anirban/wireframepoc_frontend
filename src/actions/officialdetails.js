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

export const updateskillset = (skilltype, skillname) => {
  const emailid = sessionStorage.getItem('emailid');
  return (dispatch, getState) => {
    const { officialdetails } = getState().officialdetails;
    const existedSkills = officialdetails[skilltype];
    const updatedSkills = existedSkills + ',' + skillname;
    dispatch({ type: actions.REQUEST_UPDATE_SKILL });
    return apiClient
      .patch(`${endPoints().updateskillset}?emailid=${emailid}`, {
        skilltype,
        updatedSkills,
      })
      .then((res) => {
        dispatch({ type: actions.RECEIVE_UPDATE_SKILL, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_UPDATE_SKILL });
      });
  };
};
