import axios from 'axios';

export const fetchPostsByCategory = (slug, limit = 10, offset = 0) =>
  axios
    .get('/api/community', {
      params: { category: slug, limit, offset },
    })
    .then(r => r.data.posts);
