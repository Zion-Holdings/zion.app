
  process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || process.env.MAILCHIMP_LIST_ID; // Fallback'';
  apiKey && listId ? new MailchimpService(apiKey, listId) : undefined'';
export type { MailchimpMember } from '';
'''''''