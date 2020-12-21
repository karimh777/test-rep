module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['standard', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['node', 'promise', 'jest'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'object-shorthand': ['error', 'properties'],
    'spaced-comment': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never',
        },
      },
    ],
    'vue/max-attributes-per-line': ['error', { singleline: 4 }],
    'vue/no-v-html': 'off',
    'vue/one-component-per-file': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
