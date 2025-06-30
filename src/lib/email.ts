import sgMail from '@sendgrid/mail';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface EmailOptions {
  to: string;
  templateId: string;
  dynamicTemplateData: {
    orderId?: string;
    downloadLinks?: string[]; // Assuming download links are an array of strings
    supportContact?: string;
    [key: string]: any; // Allow other dynamic data
  };
}

export async function sendEmailWithSendGrid({
  to,
  templateId,
  dynamicTemplateData,
}: EmailOptions): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    logErrorToProduction('SENDGRID_API_KEY is not set. Email not sent.');
    // In a real application, you might want to throw an error or handle this more gracefully.
    return;
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: to,
    from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com', // It's good practice to set a verified sender email in SendGrid
    templateId: templateId,
    dynamicTemplateData: dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
    logInfo(`Email sent to ${to} using template ${templateId}`);
  } catch (error: any) {
    logErrorToProduction('Error sending email with SendGrid:', { data: error.toString() });
    // Optionally, rethrow the error or handle it as needed by your application's error handling strategy
    // For example, if the error response from SendGrid is available:
    if (error.response) {
      logErrorToProduction('SendGrid error response:', { data: error.response.body });
    }
    // Consider logging this to a more persistent error tracking service in production
  }
}

export async function sendResetEmail(
  email: string,
  token: string,
): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    logErrorToProduction('SENDGRID_API_KEY is not set. Reset email not sent.');
    return;
  }

  sgMail.setApiKey(apiKey);

  const from = process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const resetUrl = `${appUrl}/reset-password/${token}`;

  const msg = {
    to: email,
    from,
    subject: 'Password Reset',
    text: `Reset your password using this link: ${resetUrl}`,
    html: `<p>Reset your password by clicking the link below:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
  };

  try {
    await sgMail.send(msg);
    logInfo(`Password reset email sent to ${email}`);
  } catch (error: any) {
    logErrorToProduction('Error sending password reset email:', { data: error.toString() });
    if (error.response) {
      logErrorToProduction('SendGrid error response:', { data: error.response.body });
    }
  }
}

export async function sendFeedbackEmail(data: {
  rating: number;
  comment?: string;
  url?: string;
  userAgent?: string;
}): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const to =
    process.env.FEEDBACK_EMAIL_TO || process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  if (!apiKey || !to) {
    logErrorToProduction('SendGrid config missing. Feedback email not sent.');
    return;
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
    subject: 'New Feedback Received',
    text: `Rating: ${data.rating}\nComment: ${data.comment || 'N/A'}\nURL: ${
      data.url || 'N/A'
    }\nUserAgent: ${data.userAgent || 'N/A'}`,
  };

  try {
    await sgMail.send(msg);
    logInfo(`Feedback email sent to ${to}`);
  } catch (error: any) {
    logErrorToProduction('Error sending feedback email:', { data: error.toString() });
    if (error.response) {
      logErrorToProduction('SendGrid error response:', { data: error.response.body });
    }
  }
}
