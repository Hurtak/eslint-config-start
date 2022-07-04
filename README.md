# eslint-config-start

- Slightly opinionated Eslint config that should be a good start for any project.
- Contains universal rules that are not framework or FE/BE specific.
- Supports [TypeScript](https://www.typescriptlang.org/) and [Prettier](https://prettier.io/).

## What it contains

- JavaScript
  - [eslint:recommended](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  - [eslint-config-standard](https://github.com/standard/eslint-config-standard)
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- TypeScript
  - [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs)
  - [@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#recommended-configs)
- Formatting
  - [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

Check the full list of rules in [index.js](./index.js)

## Install

```shell
npm install --save-dev eslint-config-start
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

## List of `start` packages

- [eslint-config-start](https://github.com/Hurtak/eslint-config-start)