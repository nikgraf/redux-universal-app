/*
 * Entry point for the client.
 */

// React now tags elements with a specific ES2015 (ES6) Symbol in browsers that
// support it, in order to ensure that React never considers untrusted JSON to
// be a valid element. If this extra security protection is important to you,
// you should add a Symbol polyfill for older browsers, such as the one included
// by Babel’s polyfill.
import 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from '../common/store/configureStore';
import Root from '../common/containers/Root';
import Immutable from 'immutable';

// Instatiate the store with the state constructed on the server
const initialState = Immutable.fromJS(window.__INITIAL_STATE__);
const store = configureStore(initialState);

const history = createBrowserHistory();

// Render the application root
ReactDOM.render(
  <Root store={store}
        history={history} />,
  document.getElementById('root')
);
