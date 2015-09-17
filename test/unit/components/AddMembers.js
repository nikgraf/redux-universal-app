import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import AddMember from '../../../common/components/AddMember';
import React from 'react';
import sinon from 'sinon';

describe('AddMembers', () => {
  let result;
  let onAddSpy;

  beforeEach(() => {
    onAddSpy = sinon.spy();
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(
      <AddMember onAdd={onAddSpy} />
    );
    result = shallowRenderer.getRenderOutput();
  });

  it('should render the button', () => {
    expect(result.type).to.equal('button');
    expect(result.props.children).to.equal('Add Member here');
  });

  it('should call onAdd when clicking the button', () => {
    result.props.onClick();
    expect(onAddSpy).to.have.been.calledOnce;
  });
});
