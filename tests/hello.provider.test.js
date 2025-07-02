// eslint-disable-next-line @typescript-eslint/no-require-imports
import path from 'path';
import http from 'http';
import { Verifier } from '@pact-foundation/pact';
import app from '../server/stubServer';

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(4011, done);
});

afterAll((done) => {
  server.close(done);
});

test('HelloService meets contract', async () => {
  const opts = {
    provider: 'HelloService',
    providerBaseUrl: 'http://localhost:4011',
    pactUrls: [path.resolve(__dirname, '../pact/HelloConsumer-HelloService.json')],
  };
  await new Verifier(opts).verifyProvider();
});
