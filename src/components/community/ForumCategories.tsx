import React from 'react';
import { ForumCategoryInfo } from '@/types/community';

export default function ForumCategories() {
  const categories: ForumCategoryInfo[] = [
    {
      id: '1',
      name: 'General Discussion',
      description: 'General topics and discussions',
      postCount: 150,
      adminOnly: false,
      icon: 'message-circle',
      lastPost: {
        title: 'Welcome to the community!',
        author: 'Admin',
        date: '2024-01-15'
      }
    },
    {
      id: '2',
      name: 'Technical Support',
      description: 'Get help with technical issues',
      postCount: 89,
      adminOnly: false,
      icon: 'code',
      lastPost: {
        title: 'API integration question',
        author: 'Developer123',
        date: '2024-01-14'
      }
    }
  ];

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>
          <p className="text-zion-slate-light mb-2">{category.description}</p>
          <div className="flex justify-between text-sm text-zion-slate-light">
            <span>{category.postCount} posts</span>
            {category.lastPost && (
              <span>Last: {category.lastPost.title} by {category.lastPost.author}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}