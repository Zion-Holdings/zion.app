import type { TestAPI } from 'vitest'

declare global {
  const vi: typeof import('vitest').vi;
  const describe: TestAPI['describe'];
  const it: TestAPI['it'];
  const expect: TestAPI['expect'];
  const beforeEach: TestAPI['beforeEach'];
  const afterEach: TestAPI['afterEach'];
  const beforeAll: TestAPI['beforeAll'];
  const afterAll: TestAPI['afterAll'];
  const test: TestAPI['test'];
}

export {}; 