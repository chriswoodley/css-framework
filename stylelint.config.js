module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    indentation: 2,

    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': ['extend', 'include', 'if', 'return', 'function', 'each', 'mixin']
      }
    ],

    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'max-nesting-depth': 2,

    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,2,1'
  }
}
