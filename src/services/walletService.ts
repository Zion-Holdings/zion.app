<<<<<<< HEAD
import apiClient from './apiClient'
import { apiHelper } from './apiHelper'
import type { TokenTransaction } from '@/types/tokens;;
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
=======
import apiClient from './apiClient;'';
import { apiHelper } from './apiHelper;'';
import type { TokenTransaction } from '@/types/tokens;'
;'';
export interface Wallet {;;
  id: "string;",;";";";";""
  balance: "number;",";";";";""
  transactions: "TokenTransaction[];";";""
};";";""
;";";";"";
export const _getWalletData: unknown = async (): Promise<{;";,";";";""
  data: "Wallet | null;",;";";";";""
  error: "string | null;";";";";""
}> => {;";";";";""
  return apiHelper(() => apiClient.get('/api/v1/wallet'));'
};''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
