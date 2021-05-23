import actions from '../components/constants/actionTypes';

const defaultState = {
  userdetails: {
    city: '',
    emailid: '',
    fname: '',
    houseno: '',
    landmark: '',
    lname: '',
    mname: '',
    pin: 713358,
    poffice: '',
    state: '',
    image: '',
  },
  isFetchingUserdetails: false,
};
export const userdetails = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_USER_DETAILS:
      return {
        ...state,
        isFetchingUserdetails: true,
      };
    case actions.RECEIVE_USER_DETAILS:
      return {
        ...state,
        isFetchingUserdetails: false,
        userdetails: { ...action.payload.userdetail },
      };
    case actions.FAILED_FETCH_USER_DETAILS:
      return {
        ...state,
        isFetchingUserdetails: false,
      };
    default:
      return state;
  }
};
