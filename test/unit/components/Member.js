import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Member from '../../../common/components/Member';
import { Map } from 'immutable';
import React from 'react';

describe('Member', () => {
  let result;

  beforeEach(() => {
    const shallowRenderer = TestUtils.createRenderer();
    const member = Map({name: 'Tom', age: 87});
    shallowRenderer.render(
      <Member member={member} />
    );
    result = shallowRenderer.getRenderOutput();
  });

  it('should render the name', () => {
    expect(result.props.children).to.include('Tom');
  });

  it('should render the age', () => {
    expect(result.props.children).to.include(87);
  });
});
