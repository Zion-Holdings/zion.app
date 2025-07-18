import sgMail from '@sendgrid/mail'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
'
interface EmailOptions {
  to: "string"
  templateId: string,"
  dynamicTemplateData: {""
    orderId?: string"
    downloadLinks?: string[] // Assuming download links are an array of strings"
    supportContact?: string"
    [key: "string]: unknown // Allow other dynamic data"
  }