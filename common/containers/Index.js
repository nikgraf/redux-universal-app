import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import AddMember from '../components/AddMember';
import Member from '../components/Member';
import { addMember, fetchMembers } from '../actions/MemberActions';

const UserInfoA = () =>
  <div>
    <img src="https://avatars1.githubusercontent.com/u/223045?v=3&s=50" /> Nik
  </div>
;

const UserInfoB = () =>
  <div>
    <img src="https://avatars1.githubusercontent.com/u/223045?v=3&s=50" /> Niko
  </div>
;

const HeaderA = () =>
  <div>
    Search Header A <UserInfoA />
  </div>
;

const HeaderB = () =>
  <div>
    Search Header B <UserInfoB />
  </div>
;

class Index extends Component {

  static propTypes = {
    members: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    searchActive: false,
  }

  componentWillMount() {
    this.props.dispatch(fetchMembers());
  }

  _triggerToggleSearch() {
    this.setState({ searchActive: !this.state.searchActive });
  }

  _renderHeader() {
    if (this.state.searchActive) {
      return <HeaderA />;
    }

    return <HeaderB />;
  }

  render() {
    const {dispatch, members} = this.props;
    return (
      <div>
        { this._renderHeader() }
        <button onClick={ ::this._triggerToggleSearch }>Toggle Header</button>

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
