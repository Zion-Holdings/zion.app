import { BlogPost } from '@/types/blog';

export const generateRandomBlogPost = (): BlogPost => {
  const titles = [
    'The Future of Technology',
    'AI Revolution in 2024',
    'Digital Transformation Guide',
    'Cybersecurity Best Practices',
    'Cloud Computing Trends'
  ];
  
  const authors = [
    { name: 'Tech Expert', avatar: '/avatars/tech-expert.jpg' },
    { name: 'AI Specialist', avatar: '/avatars/ai-specialist.jpg' },
    { name: 'Security Pro', avatar: '/avatars/security-pro.jpg' }
  ];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: titles[Math.floor(Math.random() * titles.length)],
    content: 'This is a sample blog post content that demonstrates our platform capabilities...',
    excerpt: 'This is a sample blog post excerpt...',
    author: authors[Math.floor(Math.random() * titles.length)],
    publishedAt: new Date().toISOString(),
    readTime: Math.floor(Math.random() * 10) + 1,
    tags: ['sample', 'technology', 'innovation'],
    image: '/images/blog-placeholder.jpg'
  };
};