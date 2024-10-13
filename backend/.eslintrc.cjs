/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:prettier/recommended",
    "prettier",
    "eslint:recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "project": "tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "env": {
    "es6": true,
    "node": true
  },
  "ignorePatterns": [".eslintrc.cjs"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "off"
  }
}
