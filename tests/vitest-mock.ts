export const vi = {
  fn: jest.fn.bind(jest),
  spyOn: jest.spyOn.bind(jest),
  mock: jest.mock.bind(jest),
  clearAllMocks: jest.clearAllMocks.bind(jest),
  restoreAllMocks: jest.restoreAllMocks.bind(jest),
  stubGlobal: (key: string, value: any) => {
    // @ts-expect-error: dynamic global property assignment - TypeScript doesn't allow dynamic global object key assignment
    global[key] = value;
  },
};

export const describe = (global as any).describe;
export const it = (global as any).it;
export const test = (global as any).test;
export const expect = (global as any).expect;
export const beforeEach = (global as any).beforeEach;
