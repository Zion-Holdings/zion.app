import apiClient from './apiClient'; // Adjust path as necessary

export async function sendMessage({ productId, sellerId, subject, message }) {
  try {
    // apiClient is configured with baseURL: '/api/v1/services'
    // so the path here should be '/messages' to target '/api/v1/services/messages'
    const response = await apiClient.post('/messages', {
      productId,
      sellerId,
      subject,
      message,
    });
    return response.data; // Or response, depending on what the caller needs
  } catch (error) {
    console.error('Error sending message:', error);
    // It's often good to let the caller handle the error,
    // or transform it into a more user-friendly format.
    throw error;
  }
}
