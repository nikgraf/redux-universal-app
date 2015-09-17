/* @flow */

import { ADD_MEMBER, REQUEST_MEMBERS, RECEIVE_MEMBERS } from '../constants/actionTypes';
import Immutable, { Map } from 'immutable';
import fetch from 'isomorphic-fetch';

const membersParams = {
  method: 'post',
  headers: {
    'Content-Type': 'application/graphql',
  },
  body: `query MembersQuery {
    members {
      name,
      age
    }
  }`,
};

type Member = {
  name: string
}

type AddMemberAction = {
  type: string,
  member: Map<string, Member>
}

export function addMember(name: string): AddMemberAction {
  return {
    type: ADD_MEMBER,
    member: Map({ name: name }),
  };
}

function requestMembers() {
  return {
    type: REQUEST_MEMBERS,
  };
}

function receiveMembers(json) {
  return {
    type: RECEIVE_MEMBERS,
    payload: Immutable.fromJS(json),
  };
}

export function fetchMembers(): any {
  return dispatch => {
    dispatch(requestMembers());
    return fetch(`http://localhost:8080/graphql/v1/`, membersParams)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMembers(json));
      });
  };
}
