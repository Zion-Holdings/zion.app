// eslint-disable-next-line @typescript-eslint/no-require-imports
import path from 'path';
import { Pact, Matchers } from '@pact-foundation/pact';
import fetch from 'node-fetch';

const provider = new Pact({
  consumer: 'QuoteWizard',
  provider: 'ItemsService',
  port: 1234,
  log: path.resolve(process.cwd(), 'pact/logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pact'),
});

describe('QuoteWizard ItemsService contract', () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());
  afterEach(() => provider.verify());

  describe('GET /api/items?category=services', () => {
    beforeAll(() => {
      return provider.addInteraction({
        state: 'services exist',
        uponReceiving: 'a request for service items',
        withRequest: {
          method: 'GET',
          path: '/api/items',
          query: { category: 'services' },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: Matchers.eachLike({
            id: Matchers.like('1'),
            title: Matchers.like('Service A'),
          }),
        },
      });
    });

    it('returns a list of services', async () => {
      const res = await fetch(
        `${provider.mockService.baseUrl}/api/items?category=services`
      );
      const body = await res.json();
      expect(res.status).toBe(200);
      expect(Array.isArray(body)).toBe(true);
    });
  });
});
