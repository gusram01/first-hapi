module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-return-assign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lines-between-class-members': 'off',
    'no-return-await': 'off',
    'import/extensions': [
      1,
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
        png: 'never',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
