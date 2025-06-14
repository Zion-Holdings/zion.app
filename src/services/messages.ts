import apiClient from './apiClient'; // Adjust path as necessary
import { apiHelper } from './apiHelper';

export async function sendMessage({ productId, sellerId, subject, message }) {
  return apiHelper(() =>
    apiClient.post('/messages', { productId, sellerId, subject, message })
  );
}
