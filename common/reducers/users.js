import { createReducer } from 'redux-immutablejs';
import Immutable from 'immutable';
import { RECEIVE_USERS } from '../constants/actionTypes';

const initialState = Immutable.fromJS([]);

export default createReducer(initialState, {
  [RECEIVE_USERS]: (users, action) => {
    const newUsers = action.payload.getIn([0, 'data', 'members'])
      .concat(action.payload.getIn([1, 'data', 'alumni']));
    return users.merge(newUsers);
  },
});
