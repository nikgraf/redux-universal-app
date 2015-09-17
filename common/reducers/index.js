import { combineReducers } from 'redux-immutablejs';
import members from './members';
import users from './users';

export default combineReducers({
  members,
  users,
});
