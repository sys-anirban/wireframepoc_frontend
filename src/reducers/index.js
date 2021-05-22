import { signin } from './signin';
import { componentHandler } from './componentHandler';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const appReducer = combineReducers({
  routing,
  signin,
  componentHandler,
});
export default appReducer;
