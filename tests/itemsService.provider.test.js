// eslint-disable-next-line @typescript-eslint/no-require-imports
import path from 'path';
import http from 'http';
import { Verifier } from '@pact-foundation/pact';
import handler from '@/pages/api/items';

let server;

beforeAll((done) => {
  server = http.createServer((req, res) => handler(req as any, res as any));
  server.listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});

test('ItemsService meets contract', async () => {
  const opts = {
    provider: 'ItemsService',
    providerBaseUrl: 'http://localhost:4000',
    pactUrls: [path.resolve(__dirname, '../pact/QuoteWizard-ItemsService.json')],
  };
  await new Verifier(opts).verifyProvider();
});
