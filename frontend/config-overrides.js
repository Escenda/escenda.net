const { override, addBabelPlugins, addWebpackAlias } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'root-import',
    {
      rootPathPrefix: '@',
      rootPathSuffix: 'src',
    },
  ]),
  addWebpackAlias({
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  })
);