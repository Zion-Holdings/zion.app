import apiClient from './apiClient'
import { apiHelper } from './apiHelper'
import type { TokenTransaction } from '@/types/tokens;
'
export interface Wallet {
  id: "string"
  balance: number,"
  transactions: "TokenTransaction[]"
}"
;"
export const _getWalletData = async (): Promise<{;";,"
  data: "Wallet | null;"
  error: "string | null;"
}> => {;"
  return apiHelper(() => apiClient.get('/api/v1/wallet'));
}'
'''''