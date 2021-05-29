import { signin } from './signin';
import { componentHandler } from './componentHandler';
import { userdetails } from './userdetails';
import { officialdetails } from './officialdetails';
import { teamdetails } from './teamdetails';
import { signup } from './signup';
import { verifyOTP } from './verifyOTP';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const appReducer = combineReducers({
  routing,
  signin,
  componentHandler,
  userdetails,
  officialdetails,
  teamdetails,
  signup,
  verifyOTP,
});
export default appReducer;
