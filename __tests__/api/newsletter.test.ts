import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/newsletter';
import { mailchimpService } from '@/integrations/mailchimp';
import { sendEmailWithSendGrid } from '@/lib/email';
import { vi, describe, it, expect, beforeEach, type MockInstance } from 'vitest';

vi.mock('@/integrations/mailchimp', () => ({
  mailchimpService: { addSubscriber: vi.fn() }
}));
vi.mock('@/lib/email', () => ({
  sendEmailWithSendGrid: vi.fn().mockResolvedValue(undefined)
}));

describe('/api/newsletter API', () => {
  // Type assertion for the mocked mailchimpService
  const mc = mailchimpService as { addSubscriber: MockInstance<[any], Promise<any>> };
  // Type assertion for the mocked sendEmailWithSendGrid
  const mockedSendEmail = sendEmailWithSendGrid as MockInstance<[any], Promise<void>>;


  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('rejects non-POST requests', async () => {
    const { req, res } = createMocks({ method: 'GET' as RequestMethod });
    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
  });

  it('validates email', async () => {
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      body: { email: 'bad-email' }
    });
    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(mc.addSubscriber).not.toHaveBeenCalled();
  });

  it('subscribes valid email', async () => {
    mc.addSubscriber.mockResolvedValue({});
    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      body: { email: 'test@example.com' }
    });
    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ status: 'subscribed' });
    expect(mc.addSubscriber).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'test@example.com',
        mergeFields: expect.any(Object)
      })
    );
    // Access the mock directly if it's hoisted and available in scope
    expect(mockedSendEmail).toHaveBeenCalled();
  });
});
