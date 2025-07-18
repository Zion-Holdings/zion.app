export interface MailchimpMember {
  email: string
  mergeFields?: Record<string, string>
}
/**;
 * Basic Mailchimp API wrapper used on both the client and Supabase edge;
 * functions.  It performs simple authenticated fetch requests using the;
 * provided API key.  Only minimal functionality needed by the app is;
 * implemented.;
 */;
export class MailchimpService {;
  private apiKey: string;
  private baseUrl: string;
  private listId: string;