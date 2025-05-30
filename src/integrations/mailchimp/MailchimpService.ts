export interface MailchimpMember {
  email: string;
  mergeFields?: Record<string, string>;
}

/**
 * Basic Mailchimp API wrapper used on both the client and Supabase edge
 * functions.  It performs simple authenticated fetch requests using the
 * provided API key.  Only minimal functionality needed by the app is
 * implemented.
 */
export class MailchimpService {
  private apiKey: string;
  private baseUrl: string;
  private listId: string;

  constructor(apiKey: string, listId: string) {
    if (!apiKey) throw new Error('Mailchimp API key missing');
    if (!listId) throw new Error('Mailchimp list ID missing');
    this.apiKey = apiKey;
    const dc = apiKey.split('-')[1];
    this.baseUrl = `https://${dc}.api.mailchimp.com/3.0`;
    this.listId = listId;
  }

  /**
   * Low level request helper exposed for edge function usage.
   */
  async request(path: string, options: RequestInit = {}) {
    const res = await fetch(this.baseUrl + path, {
      ...options,
      headers: {
        Authorization: `apikey ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Mailchimp error: ${res.status} ${text}`);
    }
    return res.json().catch(() => ({}));
  }

  /**
   * Subscribe a new member to the list.
   */
  async addSubscriber(member: MailchimpMember) {
    return this.request(`/lists/${this.listId}/members`, {
      method: 'POST',
      body: JSON.stringify({
        email_address: member.email,
        status: 'subscribed',
        merge_fields: member.mergeFields || {}
      })
    });
  }

  /**
   * Upsert a member in the list, used for nightly sync jobs.
   */
  async upsertMember(member: MailchimpMember) {
    const crypto = await import('crypto');
    const hash = crypto.createHash('md5').update(member.email.toLowerCase()).digest('hex');
    return this.request(`/lists/${this.listId}/members/${hash}`, {
      method: 'PUT',
      body: JSON.stringify({
        email_address: member.email,
        status_if_new: 'subscribed',
        merge_fields: member.mergeFields || {}
      })
    });
  }

  /**
   * Trigger a welcome email automation with a discount coupon.
   * This assumes an automation is configured in Mailchimp that will send
   * the email when a request is queued.
   */
  async sendWelcomeEmail(email: string, coupon: string) {
    return this.request(`/automations/welcome/emails/1/queue`, {
      method: 'POST',
      body: JSON.stringify({ email_address: email, coupon })
    });
  }

  /**
   * Export a segment by ID. Used by the scheduled export job.
   */
  async exportSegment(segmentId: string) {
    return this.request(`/lists/${this.listId}/segments/${segmentId}/members`);
  }
}
