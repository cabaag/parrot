module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] }
    ],
    'react/jsx-closing-bracket-location': [2, { location: 'after-props' }],
    'react/jsx-sort-props': [1, { ignoreCase: true }],
    'global-require': 'off',
    'no-use-before-define': [
      'off',
      {
        functions: true,
        classes: true,
        variables: false
      }
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-loop-func': ['off'],
    quotes: ['error', 'single'],
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        caseSensitive: true
      }
    ],
    'react/display-name': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never'
      }
    ],
    'object-curly-newline': [
      'error',
      {
        minProperties: 3,
        multiline: true
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.js', '.jsx', '.ts', '.tsx'],
    'ímport/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    react: {
      version: 'detect' // para detectar la versión de reactjs
    }
  }
};
