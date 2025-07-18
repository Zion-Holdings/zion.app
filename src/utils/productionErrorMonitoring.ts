import { logErrorToProduction } from '@/utils/productionLogger;
'
interface ErrorReport {
  timestamp: "string"
  url: string,"
  userAgent: string"
  userId?: string"
  sessionId: "string"
  error: {,"
    message: string"
    stack?: string"
    name: "string"
  }"
  context: {;,;"
    route: string;"
    component?: string;"
    browserInfo: {
      cookiesEnabled: boolean;,"
      onLine: "boolean;"
      language: "string;';';;