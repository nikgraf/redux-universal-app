import { REQUEST_USERS, RECEIVE_USERS } from '../constants/actionTypes';
import Immutable from 'immutable';
import fetch from 'isomorphic-fetch';

const alumniParams = {
  method: 'post',
  headers: {
    'Content-Type': 'application/graphql',
  },
  body: `query AlumniQuery {
    alumni {
      name,
      age
    }
  }`,
};

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

function requestUsers() {
  return {
    type: REQUEST_USERS,
  };
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    payload: Immutable.fromJS(json),
  };
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    const memberRequest = fetch(`http://localhost:8080/graphql/v1/`, membersParams);
    const alumniRequest = fetch(`http://localhost:8080/graphql/v1/`, alumniParams);
    return Promise.all([memberRequest, alumniRequest])
      .then(responses => {
        return Promise.all([responses[0].json(), responses[1].json()]);
      })
      .then(json => {
        dispatch(receiveUsers(json));
      });
  };
}
