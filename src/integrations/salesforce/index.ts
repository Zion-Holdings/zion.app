
  process.env.NEXT_PUBLIC_SALESFORCE_TOKEN || process.env.SALESFORCE_TOKEN; // Fallback, but be cautious if SALESFORCE_TOKEN is a secret and this runs client-side'';
  instanceUrl && token ? new SalesforceService(instanceUrl, token) : undefined'';
export type { SalesforceLead } from '';
'''''''