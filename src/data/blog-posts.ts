import { BlogPost } from '@/types/blog';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to Zion Tech Group',
    content: 'Welcome to Zion Tech Group, your premier technology solutions provider...',
    excerpt: 'Welcome to Zion Tech Group, your premier technology solutions provider...',
    author: {
      name: 'Zion Team',
      avatar: '/avatars/zion-team.jpg'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: '2 min read',
    tags: ['welcome', 'introduction']
  },
  {
    id: '2',
    title: 'The Future of AI in Business',
    content: 'Artificial Intelligence is revolutionizing how businesses operate...',
    excerpt: 'Artificial Intelligence is revolutionizing how businesses operate...',
    author: {
      name: 'AI Expert',
      avatar: '/avatars/ai-expert.jpg'
    },
    publishedAt: '2024-01-14T15:30:00Z',
    readTime: '5 min read',
    tags: ['AI', 'business', 'technology']
  }
];

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
    author: authors[Math.floor(Math.random() * authors.length)],
    publishedAt: new Date().toISOString(),
    readTime: `${Math.floor(Math.random() * 10) + 1} min read`,
    tags: ['sample', 'technology', 'innovation']
  };
};