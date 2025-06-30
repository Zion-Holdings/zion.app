import apiClient from './apiClient'; // Adjust path as necessary
import { apiHelper } from './apiHelper';
import {logErrorToProduction} from '@/utils/productionLogger';


// Define proper interfaces for message service
interface SendMessageParams {
  productId: string;
  sellerId: string;
  subject: string;
  message: string;
}

interface MessageResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendMessage({ 
  productId, 
  sellerId, 
  subject, 
  message 
}: SendMessageParams): Promise<MessageResponse> {
  try {
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        sellerId,
        subject,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    logErrorToProduction('Failed to send message:', { data: error });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
