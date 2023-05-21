const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./common');
const ReactRefreshTypeScript = require('react-refresh-typescript');
// const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

config.entry.hot = 'webpack/hot/dev-server.js';
config.output = {
  filename: 'js/[name].js',
};
config.mode = 'development';
config.devtool = 'inline-source-map';

config.devServer = {
  port: 5247,
  open: false,
  hot: true,
  compress: true,
  historyApiFallback: true,
};
config.plugins.push(new ReactRefreshWebpackPlugin({}));
config.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: true,
  }),
);

config.plugins.push(
  new HtmlWebpackPlugin({
    inject: false,
    // scriptLoading: 'defer',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    // favicon: `${path.join(__dirname, '../src/assets/favicon.png')}`,
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

config.module.rules.push({
  test: /\.tsx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
    {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: true,
      },
    },
  ],
});
config.module.rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
});
config.module.rules.push({
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
});

module.exports = config;
