require('babel/polyfill');
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import request from 'request';

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', (req, response) => {
  const url = 'http://localhost:8081' + req.url;
  let proxyResponse;
  if (request.method === 'POST') {
    proxyResponse = request.post({uri: url, json: req.body});
  } else {
    proxyResponse = request(url);
  }

  req.pipe(proxyResponse).pipe(response);
});

app.listen(port, () =>
  console.log(`Webpack-Server is now running on http://localhost:${port}`) // eslint-disable-line no-console
);
