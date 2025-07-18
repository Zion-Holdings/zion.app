import axios from 'axios';
import {logErrorToProduction} from '@/utils/productionLogger';

export const getWallet = async () => {

  try {
    const res = await axios.get('/api/wallet');
    return res.data;
  } catch {
    logErrorToProduction('Failed to fetch wallet', { data: 'Error occurred' });
    throw err;
  }
};
