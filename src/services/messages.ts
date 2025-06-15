import apiClient from './apiClient'; // Adjust path as necessary
import { apiHelper } from './apiHelper';

export async function sendMessage({ productId }: { productId: any }, { sellerId }: { sellerId: any }, { subject }: { subject: any }, { message }: { message: any }) {
  return apiHelper(() =>
    apiClient.post('/messages', { productId, sellerId, subject, message })
  );
}
