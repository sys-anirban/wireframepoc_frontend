import actions from '../components/constants/actionTypes';

const defaultState = {
  isVerifiedPassword: false,
  requestSignin: false,
  receiveSignin: false,
  failedSignin: false,
};
export const signin = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SIGN_IN:
      return { ...state, requestSignin: true, receiveSignin: false, failedSignin: false };
    case actions.RECEIVE_SIGN_IN:
      return { ...state, data: action.payload.data, receiveSignin: true, failedSignin: false, requestSignin: false };
    case actions.FAILED_SIGN_IN:
      return { ...state, requestSignin: false, receiveSignin: false, failedSignin: true };
    default:
      return state;
  }
};
