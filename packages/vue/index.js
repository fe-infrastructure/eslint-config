const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: ['./tsconfig.json'],
          tsconfigRootDir: process.cwd(),
        }
      },
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    TS
      ? '@eye-socket/eslint-config-ts'
      : '@eye-socket/eslint-config-basic'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}