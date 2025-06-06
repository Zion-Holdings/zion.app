import axios from 'axios';

export const getWallet = async () => {
  const res = await axios.get('/api/wallet');
  return res.data;
};
