import { createMocks } from 'node-mocks-http';
import handler from '../../api/newsletter/subscribe';

describe('/api/newsletter/subscribe', () => {
  it('rejects invalid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'bad' }
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it('accepts valid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'user@example.com' }
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ success: true });
  });
});
