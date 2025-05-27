export const vi = {
  fn: jest.fn.bind(jest),
  spyOn: jest.spyOn.bind(jest),
  mock: jest.mock.bind(jest),
  clearAllMocks: jest.clearAllMocks.bind(jest),
  restoreAllMocks: jest.restoreAllMocks.bind(jest),
  stubGlobal: (key: string, value: any) => {
    // @ts-ignore
    global[key] = value;
  },
};

export const describe = global.describe;
export const it = global.it;
export const test = global.test;
export const expect = global.expect;
export const beforeEach = global.beforeEach;
