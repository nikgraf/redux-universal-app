import webpack from 'webpack';
import productionConfig from './webpack.prod.config';

module.exports = {
  ...productionConfig,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=__webpack_hmr',
    './client/index',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_CLIENT': true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
