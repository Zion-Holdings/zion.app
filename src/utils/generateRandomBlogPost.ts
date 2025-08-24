import { BlogPost } from '@/types/blog';

export function generateRandomBlogPost(): BlogPost {
  const titles = [
    'The Future of AI in Technology',
    'Building Scalable Web Applications',
    'Machine Learning Best Practices',
    'Cloud Computing Trends',
    'Cybersecurity in 2024'
  ];

  const authors = [
    { name: 'Sarah Johnson', avatar: '/avatars/sarah.jpg', avatarUrl: '/avatars/sarah.jpg', bio: 'AI Research Lead' },
    { name: 'Michael Chen', avatar: '/avatars/michael.jpg', avatarUrl: '/avatars/michael.jpg', bio: 'Senior Software Engineer' },
    { name: 'Emily Rodriguez', avatar: '/avatars/emily.jpg', avatarUrl: '/avatars/emily.jpg', bio: 'Data Scientist' },
    { name: 'David Kim', avatar: '/avatars/david.jpg', avatarUrl: '/avatars/david.jpg', bio: 'DevOps Engineer' }
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomId = Math.random().toString(36).substr(2, 9);

  return {
    id: randomId,
    title: randomTitle,
    slug: randomTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    excerpt: `A comprehensive guide to ${randomTitle.toLowerCase()} and its impact on modern technology.`,
    content: `This is a detailed article about ${randomTitle.toLowerCase()}...`,
    author: randomAuthor,
    publishedAt: new Date().toISOString(),
    publishedDate: new Date().toISOString().split('T')[0],
    tags: ['Technology', 'Innovation', 'Development'],
    category: 'Technology',
    readTime: Math.floor(Math.random() * 10) + 5,
    featuredImage: `/blog/${randomId}.jpg`
  };
}