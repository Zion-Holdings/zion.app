import axios from 'axios';

export const getWallet = () => axios.get('/api/v1/wallet').then(r => r.data);
