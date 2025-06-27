import axios from 'axios';

export const fetchPostsByCategory = async (slug, limit = 10, offset = 0) => {
import { logError } from '@/utils/productionLogger';

  try {
    const res = await axios.get('/api/community', {
      params: { category: slug, limit, offset },
    });
    return res.data.posts;
  } catch (err) {
    logError('Failed to fetch community posts', err);
    throw err;
  }
};
