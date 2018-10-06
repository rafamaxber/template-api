module.exports = {
  env: {
    'jest/globals': true,
    es6: true,
    node: true
  },
  plugins: ['node', 'jest'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unpublished-require': 0,
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': ['off'],
    'node/no-unsupported-features': ['off'],
    'node/no-unsupported-features/es-syntax': [
      'off'
    ]
  }
}
