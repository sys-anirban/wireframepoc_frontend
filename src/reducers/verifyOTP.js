import actions from '../components/constants/actionTypes';

const defaultState = {
  isLoadingverifyOTP: false,
  isSuccessverifyOTP: false,
  iaFailedisFailedverifyOTP: false,
  isverifiedOTP: false,
};
export const verifyOTP = (state = defaultState, action) => {
  switch (action.type) {
    case actions.REQUEST_VERIFY_OTP:
      return {
        ...state,
        isLoadingverifyOTP: true,
      };
    case actions.RECEIVED_VERIFY_OTP:
      return {
        ...state,
        isLoadingverifyOTP: false,
        isSuccessverifyOTP: true,
        isverifiedOTP: action.payload.verifiedOTP,
      };
    case actions.FAILED_TO_VERIFY_OTP:
      return {
        ...state,
        isLoadingverifyOTP: false,
        iaFailedisFailedverifyOTP: true,
      };
    default:
      return state;
  }
};
