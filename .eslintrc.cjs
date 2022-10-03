/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@vue/eslint-config-prettier',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier-vue/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
