import apiClient from './apiClient';
import { apiHelper } from './apiHelper';

export interface Wallet {
  id: string;
  balance: number;
  transactions: unknown[]; // Replace 'unknown' with a specific type if available
}

export const getWalletData = async (): Promise<{ data: Wallet | null; error: string | null }> => {
  return apiHelper(() => apiClient.get('/api/v1/wallet'));
};
