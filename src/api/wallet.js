import axios from 'axios';
import { logError } from '@/utils/productionLogger';

export const getWallet = async () => {

  try {
    const res = await axios.get('/api/wallet');
    return res.data;
  } catch (err) {
    logError('Failed to fetch wallet', { data: err });
    throw err;
  }
};
