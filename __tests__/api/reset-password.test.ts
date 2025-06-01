import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/auth/reset';
import { describe, it, expect } from 'vitest';

describe('/api/auth/reset token validation', () => {
  it('returns 400 if token is missing', async () => {
    const { req, res } = createMocks({ method: 'POST', body: { newPassword: 'pass12345' } });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toBe('Token and new password are required.');
  });

  it('returns 400 for invalid token', async () => {
    const { req, res } = createMocks({ method: 'POST', body: { token: 'invalid', newPassword: 'pass12345' } });
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toBe('Invalid or expired password reset token.');
  });
});
