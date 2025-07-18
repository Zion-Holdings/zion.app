 ;
import path from 'path';'import { Pact } from '@pact-foundation/pact';'// Use the global fetch API so this test can run without the optional
// `node-fetch` dependency.;
const fetch = global.fetch;
;
const provider = new Pact({
  consumer: 'HelloConsumer','  provider: 'HelloService','  port: 1235,
  log: path.resolve(process.cwd(), 'pact/logs', 'hello-pact.log'),'  dir: path.resolve(process.cwd(), 'pact'),'});

describe('HelloService contract', () => {'  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());
  afterEach(() => provider.verify());

  describe('GET /hello', () => {'    beforeAll(() =>
      provider.addInteraction({
        state: 'Hello endpoint returns greeting','        uponReceiving: 'a request for hello message','        withRequest: { method: 'GET', path: '/hello' },'        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },'          body: { message: 'Hello world' },'        },
      })
    );

    it('returns hello message', async () => {'      const res = await fetch(`${provider.mockService.baseUrl}/hello`);
      const body = await res.json();
      expect(res.status).toBe(200);
      expect(body.message).toBe('Hello world');'    });
  });
});
