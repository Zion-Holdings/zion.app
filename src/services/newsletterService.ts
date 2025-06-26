import { mailchimpService } from '@/integrations/mailchimp';
import { sendEmailWithSendGrid } from '@/lib/email';

export async function subscribeToNewsletter(email: string): Promise<void> {
  if (mailchimpService) {
    await mailchimpService.addSubscriber({
      email,
      mergeFields: {
        SOURCE: 'website_footer',
        SIGNUP_DATE: new Date().toISOString(),
      },
    });
  } else {
    console.warn('Mailchimp not configured - skipping list subscription');
  }

  const templateId = process.env.SENDGRID_NEWSLETTER_TEMPLATE_ID;
  if (templateId) {
    try {
      await sendEmailWithSendGrid({
        to: email,
        templateId,
        dynamicTemplateData: {},
      });
    } catch (err) {
      console.error('Failed to send SendGrid welcome email:', err);
    }
  }
}
