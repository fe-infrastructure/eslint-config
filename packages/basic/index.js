module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  reportUnusedDisableDirectives: true, // 报告未使用 eslint-disable 禁用注释
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended'
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import'
            ]
          }
        ]
      }
    }
  ],
  ignorePatterns: [
    'dist',
    'node_modules',
    'package-lock.json',
    '!.vscode'
  ],
  rules: {
    // import
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external'
        }
      ],
      warnOnUnassignedImports: true
    }],
    'import/namespace': 'off',
    'import/no-unresolved': 'off'
  }
}