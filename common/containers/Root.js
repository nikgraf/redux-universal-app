import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

let Root;

if (process.env.NODE_ENV === 'development') {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
  Root = ({store, history}) =>
    <div>
      <Provider store={store}>
        <Router history={history}
                children={routes} />
      </Provider>
      <DebugPanel top right bottom key="debugPanel">
        <DevTools store={store}
                  monitor={LogMonitor}
                  visibleOnLoad/>
      </DebugPanel>
    </div>
  ;
} else {
  Root = ({store, history}) =>
    <div>
     <Provider store={store}>
       <Router history={history}
               children={routes} />
     </Provider>
    </div>
 ;
}

export default Root;
