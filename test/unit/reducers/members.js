import Immutable, { List } from 'immutable';
import { expect } from 'chai';
import { addMember } from '../../../common/actions/MemberActions';
import membersReducer from '../../../common/reducers/members';

describe('members', () => {
  it('should return the initial state', () => {
    expect(membersReducer(undefined, {})).to.equal(List());
  });

  it('should handle ADD_MEMBER', () => {
    const action = addMember('Tom');
    const nextState = membersReducer(undefined, action);

    const expectedState = Immutable.fromJS([{ name: 'Tom', age: 29 }]);
    expect(nextState).to.equal(expectedState);
  });
});
