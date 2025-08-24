import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createRequest, createResponse } from 'node-mocks-http';
import sgMail from '@sendgrid/mail';
import { forgotPassword } from '../../server/controllers/authController.js';

vi.mock('@sendgrid/mail', () => ({
  default: { setApiKey: vi.fn(), send: vi.fn() }
}));

const mockedSend = sgMail.send;

describe('authController.forgotPassword', () => {
  beforeEach(() => {
    mockedSend.mockClear();
  });

  it('sends an email via SendGrid', async () => {
    const req = createRequest({ method: 'POST', body: { email: 'test@example.com' } });
    const res = createResponse();
    await forgotPassword(req, res);
    expect(mockedSend).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200);
  });
});
