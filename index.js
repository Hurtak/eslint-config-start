module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "standard",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // Disable incompatible rules
    "unicorn/prefer-module": 0, // Not all projects are module ready yet
    "unicorn/prevent-abbreviations": 0, // Does not work well with React, revisit https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1639
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
    },
  ],
};
