const vi = {
  fn: jest.fn.bind(jest),
  spyOn: jest.spyOn.bind(jest),
  mock: jest.mock.bind(jest),
  clearAllMocks: jest.clearAllMocks.bind(jest),
  restoreAllMocks: jest.restoreAllMocks.bind(jest),
  stubGlobal: (key: string, _value: unknown) => {
    // @ts-expect-error: dynamic global property assignment - TypeScript doesn't allow dynamic global object key assignment'    global[key] = value;
  }
};
const describe = (global as any).describe;
const it = (global as any).it;
const test = (global as any).test;
const expect = (global as any).expect;
const beforeEach = (global as any).beforeEach;
