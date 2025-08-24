import React from 'react';
import { Link } from 'react-router-dom';

export function BlogSection() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of AI in Technology',
      excerpt: 'Exploring how artificial intelligence is reshaping the technology landscape...',
      date: '2024-01-15',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices and architectural patterns for creating scalable web apps...',
      date: '2024-01-10',
      readTime: '12 min read'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest from Our Blog</h2>
          <Link to="/blog" className="text-zion-cyan hover:underline">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                <Link to={`/blog/${post.id}`} className="hover:text-zion-cyan">
                  {post.title}
                </Link>
              </h3>
              <p className="text-zion-slate-light mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-zion-slate-light">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}