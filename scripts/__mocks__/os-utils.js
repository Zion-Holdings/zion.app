// scripts/__mocks__/os-utils.js
// This provides simple jest.fn() mocks.
// Tests will use .mockImplementation() to define behavior for each specific test case.
module.exports = {
  memUsage: jest.fn(),
  cpuUsage: jest.fn(),
  // platform: jest.fn(() => 'linux'), // if needed
  // countCPUs: jest.fn(() => 4), // if needed
};
