const baseConfig = require('./jest.config.cjs');

module.exports = {
  ...baseConfig,
  testMatch: ['**/tests/e2e/**/*.test.ts?(x)'],
};
