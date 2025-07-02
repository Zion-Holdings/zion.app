const { createMocks } = require('node-mocks-http');
const handler = require('../../api/subscribe');

describe('/api/subscribe', () => {
  it('rejects invalid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'bad-email' }
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it('accepts valid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'test@example.com' }
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ success: true });
  });
});
