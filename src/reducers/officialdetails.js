import actions from '../components/constants/actionTypes';

const defaultState = {
  officialdetails: {
    empcode: '',
    manager: '',
    memail: '',
    pskill: '',
    sskill: '',
  },
  isFetchingOfficialdetails: false,
};
export const officialdetails = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_OFFICIAL_DETAILS:
      return {
        ...state,
        isFetchingOfficialdetails: true,
      };
    case actions.RECEIVE_OFFICIAL_DETAILS:
      return {
        ...state,
        isFetchingOfficialdetails: false,
        officialdetails: { ...action.payload.officialdetail },
      };
    case actions.FAILED_FETCH_OFFICIAL_DETAILS:
      return {
        ...state,
        isFetchingOfficialdetails: false,
      };
    default:
      return state;
  }
};
