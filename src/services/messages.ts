import apiClient from './apiClient'; // Adjust path as necessary
import { apiHelper } from './apiHelper';

interface SendMessageParams {
  productId: string | number;
  sellerId: string | number;
  subject: string;
  message: string;
}

export async function sendMessage({ productId, sellerId, subject, message }: SendMessageParams) {
  return apiHelper(() =>
    apiClient.post('/messages', { productId, sellerId, subject, message })
  );
}
