import { signin } from './signin';
import { componentHandler } from './componentHandler';
import { userdetails } from './userdetails';
import { officialdetails } from './officialdetails';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const appReducer = combineReducers({
  routing,
  signin,
  componentHandler,
  userdetails,
  officialdetails,
});
export default appReducer;
