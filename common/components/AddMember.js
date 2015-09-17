import React from 'react';

const AddMember = ({onAdd}) =>
  <button onClick={ () => onAdd('Gretl') }>
    Add Member here
  </button>
;

export default AddMember;
