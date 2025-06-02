export interface SalesforceLead {
  FirstName: string;
  LastName: string;
  Company: string;
  Email: string;
  [key: string]: any;
}

export class SalesforceService {
  private instanceUrl: string;
  private token: string;

  constructor(instanceUrl: string, token: string) {
    if (!instanceUrl) throw new Error('Salesforce instance URL missing');
    if (!token) throw new Error('Salesforce access token missing');
    this.instanceUrl = instanceUrl;
    this.token = token;
  }

  async createLead(lead: SalesforceLead) {
    const res = await fetch(
      `${this.instanceUrl}/services/data/v59.0/sobjects/Lead`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lead)
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Salesforce error: ${res.status} ${text}`);
    }

    return res.json().catch(() => ({}));
  }
}
