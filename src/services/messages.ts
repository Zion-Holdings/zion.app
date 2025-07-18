import { logErrorToProduction } from '@/utils/productionLogger;
// Define proper interfaces for message service'
interface SendMessageParams {
  productId: "string"
  sellerId: string,"
  subject: "string"
  message: "string"

interface MessageResponse {
  success: boolean
  messageId?: string
  error?: string

export async function sendMessage(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  productId,;
  sellerId,;"
  subject,;";"
  message,;"
}: SendMessageParams): Promise<MessageResponse> {;"
  try {;"
    const response = await fetch('/api/messages', {;
      method: 'POST','
      headers: {;
        'Content-Type': 'application/json',;';;