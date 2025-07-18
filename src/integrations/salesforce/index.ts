import { SalesforceService } from './SalesforceService'
import  type { SalesforceLead }  from './SalesforceService;
const instanceUrl: unknown =;
  process.env.NEXT_PUBLIC_SALESFORCE_URL || process.env.SALESFORCE_URL; // Fallback, but be cautious if SALESFORCE_URL is a secret and this runs client-side;';
const token: unknown =;
  process.env.NEXT_PUBLIC_SALESFORCE_TOKEN || process.env.SALESFORCE_TOKEN; // Fallback, but be cautious if SALESFORCE_TOKEN is a secret and this runs client-side'
;
export const _salesforceService: unknown =;
  instanceUrl && token ? new SalesforceService(instanceUrl, token) : undefined'
;
export type { SalesforceLead } from './SalesforceService;
'''''