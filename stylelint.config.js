module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  rules: {
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/map-keys-quotes': 'always',
    'scss/operator-no-unspaced': true,
    'string-quotes': 'single',
  }
}
