import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Member from '../components/Member';
import { fetchUsers } from '../actions/UserActions';

class Users extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <h1>Users</h1>

        <div>
          {users.map((user, index) => <Member key={index} member={user} />)}
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    users: state.get('users'),
  };
}

export default connect(select)(Users);
