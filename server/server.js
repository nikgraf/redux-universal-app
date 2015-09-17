require('babel/polyfill');
import express from 'express';
import graphQLHTTP from 'express-graphql';
import Schema from '../data/schema';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import configureStore from '../common/store/configureStore';
import createLocation from 'history/lib/createLocation';
import createHistory from 'history/lib/createHistory';
import Root from '../common/containers/Root';
import favicon from 'serve-favicon';
import path from 'path';

const port = 8081;
const app = express();

// Expose a GraphQL endpoint
app.use('/graphql/v1', graphQLHTTP({schema: Schema, pretty: true}));

function renderHtml(html, initialState) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Time</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type="application/javascript" src="/static/bundle.js"></script>
      </body>
    </html>`;
}

app.use(favicon(path.join(__dirname, '..', 'static/favicon.ico')));

// used to run the server in production
app.use('/static/bundle.js', (request, response) => {
  return fs.createReadStream('./build/bundle.js').pipe(response);
});

app.use((request, response) => {
  const history = createHistory({
    getCurrentLocation: () => createLocation(request.path, {}, undefined, 'root'),
  });

  // Create a new Redux store instance
  const store = configureStore();
  const rootComponent = (
    <Root store={store}
          history={history} />
  );

  store.renderUniversal(ReactDOMServer.renderToString, rootComponent)
    .then(({ output }) => {
      const state = store.getState();
      response.send(renderHtml(output, state));
    })
    .catch(({ output, error }) => {
      const state = store.getState();
      console.log(error.message);
      response.send(renderHtml(output, state));
    });
});

app.listen(port, () =>
  console.log(`Server is now running on http://localhost:${port}`) // eslint-disable-line no-console
);
