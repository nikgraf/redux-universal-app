// Note: there is also https://github.com/gajus/redux-immutable <- investigate
import { createReducer } from 'redux-immutablejs';
import Immutable, { Map } from 'immutable';
import { ADD_MEMBER, RECEIVE_MEMBERS } from '../constants/actionTypes';

const initialState = Immutable.fromJS([]);

export default createReducer(initialState, {
  [ADD_MEMBER]: (members, action) => {
    const newMember = Map({name: action.member.get('name'), age: 29});
    return members.push(newMember);
  },

  [RECEIVE_MEMBERS]: (members, action) => {
    return members.merge(action.payload.getIn(['data', 'members']));
  },
});
