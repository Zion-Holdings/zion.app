import axios from 'axios';
import { logError } from '@/utils/productionLogger';

export const fetchPostsByCategory = async (slug, limit = 10, offset = 0) => {

  try {
    const res = await axios.get('/api/community', {
      params: { category: slug, limit, offset },
    });
    return res.data.posts;
  } catch (err) {
    logError('Failed to fetch community posts', { data: err });
    throw err;
  }
};
