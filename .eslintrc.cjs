/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': ['axios'],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['**/*.+(ts|tsx)'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    },
  ],
};
