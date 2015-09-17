import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import NotFound from '../../../common/components/NotFound';
import React from 'react';

describe('NotFound', () => {
  let result;

  beforeEach(() => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(
      <NotFound />
    );
    result = shallowRenderer.getRenderOutput();
  });

  it('should render the error page', () => {
    expect(result.props.children).to.equal('404 - page does not exists');
  });
});
