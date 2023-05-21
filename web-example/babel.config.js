module.exports = api => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  // const pluginsDev = ['react-refresh/babel'];
  const pluginsDev = [];
  const pluginsAll = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: { tests: ['./tests/'] },
        exclude: ['node_modules'],
      },
    ],
  ];
  let plugins = [...pluginsAll];
  if (!api.env('production')) {
    // plugins = [...plugins, ...pluginsDev];
    plugins = [...plugins, ...pluginsDev];
  }
  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...{ plugins },
  };
};
