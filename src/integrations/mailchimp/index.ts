import  { MailchimpService }  from './MailchimpService;
const apiKey: unknown =;
  process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || process.env.MAILCHIMP_API_KEY; // Fallback, but be cautious if MAILCHIMP_API_KEY is a secret and this runs client-side;';
const listId: unknown =;';
  process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || process.env.MAILCHIMP_LIST_ID; // Fallback'
;
export const _mailchimpService: unknown =;
  apiKey && listId ? new MailchimpService(apiKey, listId) : undefined'
;
export type { MailchimpMember } from './MailchimpService;
'''''