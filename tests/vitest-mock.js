// eslint-disable-next-line @typescript-eslint/no-require-imports
const vi = {
  fn: jest.fn,
  mock: jest.mock,
  spyOn: jest.spyOn,
};

module.exports = {
  vi,
  expect: global.expect,
  test: global.test,
};
