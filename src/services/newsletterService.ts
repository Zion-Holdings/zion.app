import { mailchimpService } from '@/integrations/mailchimp';

export async function subscribeToNewsletter(email: string): Promise<void> {
  if (!mailchimpService) throw new Error('Mailchimp not configured');
  await mailchimpService.addSubscriber({ email });
}
