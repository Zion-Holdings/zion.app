import apiClient from './apiClient';

interface WalletData {
  points: number;
  transactions: any[]; // Replace 'any' with a more specific type if available
}

export const getWalletData = async (): Promise<WalletData> => {
  try {
    const response = await apiClient.get<WalletData>('/api/v1/wallet');
    return response.data;
  } catch (error) {
    // Handle or throw error as per project's error handling strategy
    console.error('Error fetching wallet data:', error);
    throw error;
  }
};
