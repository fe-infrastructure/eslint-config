# eslint-config

参考 `antfu` 大佬的 [eslint-config](https://github.com/antfu/eslint-config) 的 `eslint config presets`

## Install

```shell
pnpm add eslint @eye-socket/eslint-config-[basic/ts/vue/react]
```

## Usage

1. 设置 eslint 配置文件
```json
// .eslintrc
{
  "extends": "@eye-socket/eslint-config-[basic/ts/vue/react]"
}
```

2. 设置 vscode 保存自动格式化

```json
// .vscode/settings.json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "markdown",
    "vue",
    "html",
    "json",
    "jsonc",
    "json5"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
