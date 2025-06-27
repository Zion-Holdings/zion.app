import axios from 'axios';

export const getWallet = async () => {
import { logError } from '@/utils/productionLogger';

  try {
    const res = await axios.get('/api/wallet');
    return res.data;
  } catch (err) {
    logError('Failed to fetch wallet', err);
    throw err;
  }
};
