// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
  },
  rules: {
    indent: 2,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-var-requires': 0,
  },
};
