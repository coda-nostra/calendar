// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const fs = require('fs');

const isLocalDevMode = process.env.DEV_MODE === 'local';

const optimization = isLocalDevMode
  ? {
      runtimeChunk: {
        name: 'runtime',
      },
    }
  : {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
      usedExports: true,
      concatenateModules: true,
      runtimeChunk: {
        name: 'runtime',
      },
      innerGraph: true,
      splitChunks: {
        maxInitialRequests: 5,
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            filename: 'js/vendor.[chunkhash].js',
          },
          reactVendor: {
            test: /[\\/]node_modules.*(react|react-dom|react-router-dom)\//,
            chunks: 'initial',
            filename: 'js/reactVendor.[chunkhash].js',
            priority: 9,
          },
        },
      },
    };
module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    app: path.resolve(__dirname, '../index.tsx'),
  },
  optimization,
  module: {
    rules: [
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.svg(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // esModule: false,
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /*  new Dotenv({
      path: isLocalDevMode
        ? path.join(__dirname, '../env/.localDev.env')
        : configPath, // load this now instead of the ones in '.env'
      safe: path.join(__dirname, '../.env.example'), // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
      prefix: 'process.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
      ignoreStub: true,
    }), */
    /* new webpack.DefinePlugin({
      processEnvs: JSON.stringify(processEnvs),
      filesAtRoot: JSON.stringify(filesAtRoot),
    }), */
  ],
};
