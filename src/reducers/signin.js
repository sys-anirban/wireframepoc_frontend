import actions from '../components/constants/actionTypes';

const defaultState = {
  isVerifiedPassword: false,
  requestSignin: false,
  signinSuccess: false,
  signinFailed: false,
};
export const signin = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SIGN_IN:
      return { ...state, requestSignin: true, signinSuccess: false, signinFailed: false };
    case actions.RECEIVE_SIGN_IN:
      return { ...state, data: action.payload.data, signinSuccess: true, signinFailed: false, requestSignin: false };
    case actions.FAILED_SIGN_IN:
      return { ...state, requestSignin: false, signinSuccess: false, signinFailed: true };
    default:
      return state;
  }
};
