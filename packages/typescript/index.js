const fs = require('fs')
const { join } = require('path')
const basic = require('@eye-socket/eslint-config-basic')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

module.exports = {
  extends: [
    '@eye-socket/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  overrides: basic.overrides.concat(
    !fs.existsSync(join(process.cwd(), tsconfig))
      ? []
      : [
          {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
              project: ['./tsconfig.json'],
              tsconfigRootDir: process.cwd(),
            },
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
            rules: {
              'no-throw-literal': 'off',
              '@typescript-eslint/no-throw-literal': 'error',
              'no-implied-eval': 'off',
              '@typescript-eslint/no-implied-eval': 'error',
              'dot-notation': 'off',
              '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
              '@typescript-eslint/no-floating-promises': 'error',
              '@typescript-eslint/no-misused-promises': 'error',
              '@typescript-eslint/await-thenable': 'error',
              '@typescript-eslint/no-for-in-array': 'error',
              '@typescript-eslint/no-unnecessary-type-assertion': 'error',
              '@typescript-eslint/no-unsafe-argument': 'error',
              '@typescript-eslint/no-unsafe-assignment': 'error',
              '@typescript-eslint/no-unsafe-call': 'error',
              '@typescript-eslint/no-unsafe-member-access': 'error',
              '@typescript-eslint/no-unsafe-return': 'error',
              'require-await': 'off',
              '@typescript-eslint/require-await': 'error',
              '@typescript-eslint/restrict-plus-operands': 'error',
              '@typescript-eslint/restrict-template-expressions': 'error',
              '@typescript-eslint/unbound-method': 'error',
            },
          }
        ]
  )
}