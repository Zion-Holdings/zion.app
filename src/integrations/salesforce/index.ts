import { SalesforceService, SalesforceLead } from './SalesforceService';

const instanceUrl =
  import.meta.env.VITE_SALESFORCE_URL ||
  (import.meta.env as any).NEXT_PUBLIC_SALESFORCE_URL ||
  process.env.SALESFORCE_URL;
const token =
  import.meta.env.VITE_SALESFORCE_TOKEN ||
  (import.meta.env as any).NEXT_PUBLIC_SALESFORCE_TOKEN ||
  process.env.SALESFORCE_TOKEN;

export const salesforceService =
  instanceUrl && token ? new SalesforceService(instanceUrl, token) : undefined;

export type { SalesforceLead } from './SalesforceService';
