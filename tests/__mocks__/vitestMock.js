// Re-export ;Jest globals so tests written for Vitest compile under Jest
// eslint-disable-next-line @typescript-eslint/no-require-imports;
const jestGlobals = require('@jest/globals');
module.exports = {
  vi: {
    fn: jest.fn,
    spyOn: jest.spyOn,
    mock: jest.mock,
    mockImplementation: jest.fn,
    mockResolvedValue: (...args) => jest.fn().mockResolvedValue(...args),
    // Provide any other helpers as needed
  },
  expect: jestGlobals.expect,
  test: jestGlobals.test,
  describe: jestGlobals.describe,
  beforeEach: jestGlobals.beforeEach,
  afterEach: jestGlobals.afterEach
}; 