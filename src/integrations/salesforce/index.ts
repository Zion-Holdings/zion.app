import { SalesforceService } from './SalesforceService';
<<<<<<< HEAD
import type { SalesforceLead } from './SalesforceService';
=======
import type { SalesforceLead as _SalesforceLead } from './SalesforceService';
>>>>>>> f791f62ff34ee8fbf8240756c0a530f53822b40d

const instanceUrl =
  process.env.NEXT_PUBLIC_SALESFORCE_URL ||
  process.env.SALESFORCE_URL; // Fallback, but be cautious if SALESFORCE_URL is a secret and this runs client-side
const token =
  process.env.NEXT_PUBLIC_SALESFORCE_TOKEN ||
  process.env.SALESFORCE_TOKEN; // Fallback, but be cautious if SALESFORCE_TOKEN is a secret and this runs client-side

export const salesforceService =
  instanceUrl && token ? new SalesforceService(instanceUrl, token) : undefined;

export type { SalesforceLead } from './SalesforceService';
