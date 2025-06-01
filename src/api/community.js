import axios from 'axios';

export const fetchPostsByCategory = slug =>
  axios
    .get(`/api/v1/community/${slug}/posts`)
    .then(r => r.data.posts);
