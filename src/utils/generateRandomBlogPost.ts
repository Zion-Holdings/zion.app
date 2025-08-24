import { BlogPost } from '@/types/blog';

const titles = [
  'The Future of AI in Software Development',
  'Building Scalable Microservices Architecture',
  'Best Practices for React Performance Optimization',
  'DevOps Trends to Watch in 2024',
  'Cybersecurity Essentials for Modern Applications',
  'Cloud-Native Development Strategies',
  'Machine Learning in Production Systems',
  'Modern Frontend Development Patterns'
];

const authors = [
  'Sarah Johnson',
  'Michael Chen',
  'Emily Rodriguez',
  'David Kim',
  'Lisa Thompson',
  'Alex Wong',
  'Maria Garcia',
  'James Wilson'
];

const categories = [
  'AI & Machine Learning',
  'Software Architecture',
  'Frontend Development',
  'DevOps & Cloud',
  'Cybersecurity',
  'Backend Development',
  'Mobile Development',
  'Data Science'
];

export function generateRandomBlogPost(): BlogPost {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: randomTitle,
    excerpt: `This is a sample excerpt for the blog post "${randomTitle}". It provides a brief overview of what readers can expect to learn from this article.`,
    content: `This is a sample blog post content for "${randomTitle}". In a real application, this would contain the full article content with proper formatting, images, and detailed information about the topic.`,
    author: randomAuthor,
    category: randomCategory,
    publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 10) + 5,
    tags: ['sample', 'tech', 'development'],
    slug: randomTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  };
}