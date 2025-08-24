import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image?: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business: 2024 Trends and Predictions',
    excerpt: 'Discover how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI era.',
    category: 'AI & Technology',
    author: 'Dr. Sarah Chen',
    publishDate: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Micro SAAS: The New Frontier of Business Software',
    excerpt: 'Explore how micro SAAS platforms are revolutionizing business operations and why companies are adopting this approach.',
    category: 'Business Strategy',
    author: 'Michael Rodriguez',
    publishDate: '2024-01-10',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices for 2024',
    excerpt: 'Essential cybersecurity strategies and tools that every business should implement to protect against evolving threats.',
    category: 'Cybersecurity',
    author: 'Emily Johnson',
    publishDate: '2024-01-05',
    readTime: '6 min read',
  },
];

export function BlogSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Latest Insights & Updates
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay informed about the latest trends in AI, IT services, and business technology 
              with our expert analysis and industry insights.
            </p>
          </div>
          <Link
            to="/blog"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{post.author}</span>
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest insights, industry updates, and exclusive content delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}