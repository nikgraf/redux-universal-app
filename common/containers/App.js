import React from 'react';
import { Link } from 'react-router';

const App = ({children}) =>
  <div>
    Header
    <div>
      Navigation:
      <Link to={'/'}>Home</Link>
      <Link to={'/users'}>Users</Link>
      <Link to={'/about'}>About</Link>
    </div>
    { children }
    Footer
  </div>
;

export default App;
