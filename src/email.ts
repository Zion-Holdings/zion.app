import { config } from './config.js';
import { Resend } from 'resend';
import sgMail from '@sendgrid/mail';

export type EmailProvider = 'resend' | 'sendgrid' | 'none';

export interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface SendEmailResult {
  provider: EmailProvider;
  messageId: string | null;
}

function pickProvider(): EmailProvider {
  if (config.RESEND_API_KEY) return 'resend';
  if (config.SENDGRID_API_KEY) return 'sendgrid';
  return 'none';
}

export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const provider = pickProvider();
  if (provider === 'none') {
    return { provider, messageId: null };
  }

  if (provider === 'resend') {
    const resend = new Resend(config.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: config.EMAIL_FROM,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text
    });
    const messageId = (result?.data as any)?.id ?? null;
    return { provider, messageId };
  }

  sgMail.setApiKey(config.SENDGRID_API_KEY as string);
  const [response] = await sgMail.send({
    from: config.EMAIL_FROM,
    to: params.to,
    subject: params.subject,
    html: params.html,
    text: params.text
  });
  const messageId = response.headers['x-message-id'] || response.headers['x-request-id'] || null;
  return { provider, messageId: Array.isArray(messageId) ? messageId[0] : messageId };
}