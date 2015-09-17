import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import AddMember from '../components/AddMember';
import Member from '../components/Member';
import { addMember, fetchMembers } from '../actions/MemberActions';

class Index extends Component {

  static propTypes = {
    members: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(fetchMembers());
  }

  render() {
    const {dispatch, members} = this.props;
    return (
      <div>
        <h1>Members</h1>

        <div>
          {members.map((member, index) => <Member key={index} member={member} />)}
        </div>
        <button onClick={ () => dispatch(fetchMembers()) }>Fetch</button>
        <AddMember onAdd={ name => dispatch(addMember(name)) }/>
      </div>
    );
  }
}

function select(state) {
  return {
    members: state.get('members'),
  };
}

export default connect(select)(Index);
