/* @flow */

import React from 'react';

const Member = ({member}: Object): Object =>
  <div>
    {member.get('name')} - {member.get('age')}
  </div>
;

export default Member;
