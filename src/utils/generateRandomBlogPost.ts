export const generateRandomBlogPost = () => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: 'Sample Blog Post',
    excerpt: 'This is a sample blog post excerpt.',
    content: 'This is sample blog post content.',
    author: 'Zion Tech Group',
    publishedAt: new Date().toISOString(),
    tags: ['sample', 'blog']
  };
};