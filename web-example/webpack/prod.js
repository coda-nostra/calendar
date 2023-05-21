const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

config.mode = 'production';
config.stats = 'verbose';
config.devtool = false;

config.optimization.minimizer.push(new TerserPlugin());

config.output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: './',
  filename: 'js/[name].[chunkhash].js',
  chunkFilename: 'js/[name].[chunkhash].js',
  clean: true,
};

config.plugins.push(new MiniCssExtractPlugin());

config.plugins.push(
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
);

config.plugins.push(new LodashModuleReplacementPlugin());

config.module.rules.push({
  test: /\.tsx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: [
          [
            'import',
            {
              libraryName: 'antd',
              style: 'css',
            },
            'antd',
          ],
          [
            'import',
            {
              libraryName: 'lodash',
              libraryDirectory: '',
              camel2DashComponentName: false,
            },
            'lodash',
          ],
        ],
      },
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
});
config.module.rules.push({
  test: /\.css$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
  ],
});

config.plugins.push(
  new HtmlWebpackPlugin({
    inject: false,
    // scriptLoading: 'defer',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    favicon: `${path.join(__dirname, '../src/assets/favicon.png')}`,
    templateContent: ({ htmlWebpackPlugin }) => `
  <html>
    <head>
      ${htmlWebpackPlugin.tags.headTags}
      <title>Ticketing Dashboard</title>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="app"></div>
      ${htmlWebpackPlugin.tags.bodyTags}
    </body>
  </html>
`,
  }),
);

// config.plugins.push(
//   new Dotenv({
//     path: path.join(__dirname, '../env/.production.env'), // load this now instead of the ones in '.env'
//     safe: path.join(__dirname, '../.env.example'), // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
//     allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
//     systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
//     silent: true, // hide any errors
//     defaults: false, // load '.env.defaults' as the default values if empty.
//     prefix: 'process.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
//     ignoreStub: true,
//   }),
// );
module.exports = config;
