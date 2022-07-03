# eslint-config-start

Eslint config providing collection of reasonable default for most projects.

- TODO list of enabled plugins
- TODO our own custom rules

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

Add this to your .eslintrc file:

```json
{
  "extends": [
    "start"
  ],

  // In case you are using TypeScript, also add link to the tsconfig
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
