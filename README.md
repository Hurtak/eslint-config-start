# eslint-config-start

Eslint config providing collection of reasonable default for most project.

[TypeScript](https://www.typescriptlang.org/) and [Prettier](https://prettier.io/) support included.

## What it contains

- JavaScript
  - [eslint:recommended](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  - [eslint-config-standard](https://github.com/standard/eslint-config-standard)
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- TypeScript
  - [@typescript-eslint/eslint-recommended](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs)
  - [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs)
  - [@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs)
- Formatting
  - [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

Check the full list of rules in [index.js](./index.js)

## Install

Npm

```shell
npm i -D -E eslint-config-start
```

Yarn

```shell
yarn add -D -E eslint-config-start
```

## Configure

Add this to your `.eslintrc` file:

```json5
{
  "extends": [
    "start"
  ],

  // In case you are using TypeScript, also add link to the tsconfig in the overrides
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
  ]
}
```
