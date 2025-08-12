import React, { createContext, useContext, ReactNode } from 'react';
import { ForumPost } from '@/types/community';

interface CommunityContextType {
  featuredPosts: ForumPost[];
  recentPosts: ForumPost[];
}

const defaultContext: CommunityContextType = {
  featuredPosts: [],
  recentPosts: [],
};

const CommunityContext = createContext<CommunityContextType>(defaultContext);

export function useCommunity(): CommunityContextType {
  return useContext(CommunityContext);
}

export function CommunityProvider({ children }: { children: ReactNode }) {
  const featuredPosts: ForumPost[] = [
    {
      id: '1',
      title: 'Best practices for AI model fine-tuning',
      content:
        "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
      authorId: 'user1',
      authorName: 'Alex Johnson',
      authorAvatar: 'https://i.pravatar.cc/150?img=3',
      authorRole: 'Verified Talent',
      categoryId: 'ai-tools',
      tags: ['machine-learning', 'fine-tuning', 'gpt'],
      createdAt: '2025-04-01T12:00:00Z',
      updatedAt: '2025-04-01T12:00:00Z',
      upvotes: 48,
      downvotes: 2,
      replyCount: 12,
      isAnswered: true,
      isFeatured: true,
    },
    {
      id: '2',
      title: 'How to build an effective AI talent profile?',
      content:
        "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
      authorId: 'user2',
      authorName: 'Sarah Chen',
      authorAvatar: 'https://i.pravatar.cc/150?img=5',
      categoryId: 'getting-hired',
      tags: ['profile', 'tips', 'hiring'],
      createdAt: '2025-04-03T09:15:00Z',
      updatedAt: '2025-04-03T09:15:00Z',
      upvotes: 32,
      downvotes: 0,
      replyCount: 8,
      isPinned: true,
      isFeatured: true,
    },
  ];

  const recentPosts: ForumPost[] = [
    {
      id: '3',
      title: 'Looking for feedback on my automated testing approach',
      content:
        "I've set up a CI/CD pipeline with the following testing strategy...",
      authorId: 'user3',
      authorName: 'Michael Wong',
      categoryId: 'project-help',
      tags: ['testing', 'automation', 'ci-cd'],
      createdAt: '2025-04-10T14:30:00Z',
      updatedAt: '2025-04-10T14:30:00Z',
      upvotes: 5,
      downvotes: 0,
      replyCount: 2,
    },
    {
      id: '4',
      title: 'Feature request: Team collaboration tools',
      content:
        'It would be really helpful if we could have built-in tools for team collaboration...',
      authorId: 'user4',
      authorName: 'Emma Davis',
      categoryId: 'feedback',
      tags: ['feature-request', 'teams', 'collaboration'],
      createdAt: '2025-04-09T18:45:00Z',
      updatedAt: '2025-04-09T18:45:00Z',
      upvotes: 12,
      downvotes: 1,
      replyCount: 3,
    },
    {
      id: '5',
      title: 'How to handle client scope creep?',
      content:
        "I'm working on a project where the client keeps adding requirements...",
      authorId: 'user5',
      authorName: 'David Lin',
      categoryId: 'project-help',
      tags: ['client-management', 'scope', 'projects'],
      createdAt: '2025-04-08T10:20:00Z',
      updatedAt: '2025-04-08T10:20:00Z',
      upvotes: 24,
      downvotes: 0,
      replyCount: 7,
      isAnswered: true,
    },
  ];

  return (
    <CommunityContext.Provider value={{ featuredPosts, recentPosts }}>
      {children}
    </CommunityContext.Provider>
  );
}

