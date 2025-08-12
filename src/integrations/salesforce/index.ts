import { SalesforceService, SalesforceLead } from './SalesforceService';

const instanceUrl =
  process.env.NEXT_PUBLIC_SALESFORCE_URL ||
  process.env.SALESFORCE_URL; // Fallback, but be cautious if SALESFORCE_URL is a secret and this runs client-side
const token =
  process.env.NEXT_PUBLIC_SALESFORCE_TOKEN ||
  process.env.SALESFORCE_TOKEN; // Fallback, but be cautious if SALESFORCE_TOKEN is a secret and this runs client-side

export const salesforceService =
  instanceUrl && token ? new SalesforceService(instanceUrl, token) : undefined;

export type { SalesforceLead } from './SalesforceService';
