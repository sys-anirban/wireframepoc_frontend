import actions from '../components/constants/actionTypes';

const defaultState = {
  isLoading: false,
  isUserAuthenticated: false,
  isInvalid: false,
};
export const signin = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case actions.RECEIVE_SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: action.payload.isUserAuthenticated,
        isInvalid: false,
      };
    case actions.FAILED_SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isInvalid: true,
      };
    default:
      return state;
  }
};
