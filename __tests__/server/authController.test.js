const { describe, it, expect, vi, beforeEach } = require('vitest');
const { createRequest, createResponse } = require('node-mocks-http');
const sgMail = require('@sendgrid/mail');
const { forgotPassword } = require('../../server/controllers/authController');

vi.mock('@sendgrid/mail', () => ({
  default: { setApiKey: vi.fn(), send: vi.fn() },
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
