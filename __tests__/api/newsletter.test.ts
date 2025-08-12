import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/newsletter';
import { mailchimpService } from '@/integrations/mailchimp';

jest.mock('@/integrations/mailchimp', () => ({
  mailchimpService: { addSubscriber: jest.fn() }
}));
jest.mock('@/lib/email', () => ({
  sendEmailWithSendGrid: jest.fn().mockResolvedValue(undefined)
}));

describe('/api/newsletter API', () => {
  const mc = mailchimpService as { addSubscriber: jest.Mock };

  beforeEach(() => {
    jest.clearAllMocks();
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
    const { sendEmailWithSendGrid } = jest.requireMock('@/lib/email');
    expect(sendEmailWithSendGrid).toHaveBeenCalled();
  });
});
