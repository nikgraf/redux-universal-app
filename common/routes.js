import React from 'react';
import {
  IndexRoute,
  Route
} from 'react-router';

import About from './containers/About';
import App from './containers/App';
import Index from './containers/Index';
import NotFound from './components/NotFound';
import Users from './containers/Users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="about"
           component={About} />
    <Route path="users"
           component={Users} />
    <Route path="*"
           component={NotFound} />
  </Route>
);
