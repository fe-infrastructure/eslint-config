module.exports = {
  extends: [
    '@eye-socket/eslint-config-ts',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}