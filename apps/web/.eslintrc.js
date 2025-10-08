const baseConfig = require('../../packages/config/eslint/base');

module.exports = {
  ...baseConfig,
  root: true,
  rules: {
    ...baseConfig.rules,
    '@next/next/no-img-element': 'off'
  }
};
