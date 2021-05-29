import actions from '../components/constants/actionTypes';

const defaultState = {
  isLoadingSignUp: false,
  isSuccessSignUp: false,
  iaFailedSignUp: false,
  signupData: null,
};
export const signup = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SIGN_UP:
      return {
        ...state,
        isLoadingSignUp: true,
      };
    case actions.RECEIVE_SIGN_UP:
      return {
        ...state,
        isLoadingSignUp: false,
        isSuccessSignUp: true,
        signupData: action.payload.details,
      };
    case actions.FAILED_TO_SIGN_UP:
      return {
        ...state,
        isLoadingSignUp: false,
        iaFailedSignUp: true,
      };
    default:
      return state;
  }
};
