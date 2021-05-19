import actions from '../components/constants/actionTypes';

const defaultState = {
  isLoading: false,
  isFailed: false,
  loginResponse: {
    errros: [],
    isUserAuthenticated: false,
  },
};
export const signin = (state = defaultState, action) => {
  console.log('Payload', action.payload);
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
        loginResponse: {
          isUserAuthenticated: action.payload.loginResponse.isUserAuthenticated,
          errors: action.payload.loginResponse.errors,
        },
      };
    case actions.FAILED_SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    default:
      return state;
  }
};
