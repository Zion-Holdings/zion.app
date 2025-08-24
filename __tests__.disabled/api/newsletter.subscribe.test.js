import { createMocks } from node-mocks-http';import fs from fs';import path from path';import handler from ../../api/newsletter/subscribe';;
const FILE_PATH = path.join(process.cwd(), data', newsletter-subscriptions.json');
describe('/api/newsletter/subscribe', () => {'  beforeEach(() => {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
  });
  it('rejects invalid email', async () => {'    const { req, res } = createMocks({
      method: 'POST',      body: { email: 'bad' }    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it('accepts valid email', async () => {'    const { req, res } = createMocks({
      method: 'POST',      body: { email: user@example.com' }    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ success: true });
    const stored = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));    expect(stored).toContain('user@example.com');  });
});
