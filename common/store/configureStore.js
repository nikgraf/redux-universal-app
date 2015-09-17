import { compose, createStore } from 'redux';
import Immutable, { List }from 'immutable';
import reducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

let createStoreWithMiddleware;
let middlewares = List();
middlewares = middlewares.push(thunkMiddleware);

if (process.env.IS_CLIENT) {
  const createLogger = require('redux-logger');
  const loggerMiddleware = createLogger({
    transformer: (state) => state.toJS(),
    collapsed: true,
  });

  // Logger must be last middleware in chain, otherwise it will log thunk and
  // promise, not actual actions
  middlewares = middlewares.push(loggerMiddleware);
}

const applyMiddleware = process.env.IS_CLIENT ?
    require('redux').applyMiddleware :
    require('redux-universal');

if (process.env.NODE_ENV === 'development') {
  const devTools = require('redux-devtools').devTools;
  createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares.toJS()),
    devTools()
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(...middlewares.toJS())(createStore);
}

export default function configureStore(initialState = Immutable.fromJS({})) {
  return createStoreWithMiddleware(reducer, initialState);
}
