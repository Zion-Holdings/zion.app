import axios from 'axios';
export const getWallet = async () => {
    try {
        const res = await axios.get('/api/wallet');
        return res.data;
    }
    catch (err) {
        console.error('Failed to fetch wallet', err);
        throw err;
    }
};
