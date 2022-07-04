module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "standard",
    "plugin:promise/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],

  rules: {
    // Enable rules from plugins
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // Disable incompatible rules
    "unicorn/prefer-module": "off", // Not all projects are module ready yet
    "unicorn/prevent-abbreviations": "off", // Does not work well with React, revisit https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1639
    "no-void": "off" // Enabled by "standard", does not play well with "promise" config
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      rules: {
        // Our custom rules
		"@typescript-eslint/consistent-type-definitions": ["error", "type"] // The difference between Interface and Type are very minimal, so it makes sense to settle only on one of them
      }
    },
  ],
};
