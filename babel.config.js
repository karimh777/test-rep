module.exports = (api) => {
  //api.cache(true);

  console.log(api.env());
  const presets = [];
  presets.push(['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3 } }]);

  //const plugins = [];
  return {
    presets,
    env: {
      es: {
        plugins: [['@babel/plugin-transform-modules-commonjs', { loose: true }]],
      },
      esm: {
        presets: [['@babel/preset-env', { modules: false }]],
      },
      test: {
        presets: [['@babel/env', { targets: { node: 'current' } }]],
      },
    },
  };
};
