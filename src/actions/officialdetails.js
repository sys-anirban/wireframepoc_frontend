import actions from '../components/constants/actionTypes';
import endPoints from '../components/constants/Config';
import { apiUrl } from '../components/constants/baseUrl';
import axios from 'axios';

export const fetchofficialdetails = () => {
  const emailid = sessionStorage.getItem('emailid');
  const token = sessionStorage.getItem('token');
  return (dispatch) => {
    dispatch({ type: actions.REQUEST_OFFICIAL_DETAILS });
    return axios
      .get(`${apiUrl}${endPoints().officialdetailsurl}`, {
        headers: { emailid, Authorization: token ? `Bearer ${token}` : null },
      })
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
    const updatedSkills = existedSkills ? existedSkills + ',' + skillname : skillname;
    dispatch({ type: actions.REQUEST_UPDATE_SKILL });
    return axios
      .patch(
        `${apiUrl}${endPoints().updateskillset}`,
        {
          skilltype,
          updatedSkills,
        },
        { headers: { emailid } },
      )
      .then((res) => {
        dispatch({ type: actions.RECEIVE_UPDATE_SKILL, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: actions.FAILED_TO_UPDATE_SKILL });
      });
  };
};
