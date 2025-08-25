export interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: ForumReply[];
  isPinned: boolean;
  isLocked: boolean;
}

export interface ForumReply {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  parentId?: string;
}

export interface ForumCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  postCount: number;
  lastPost?: {
    title: string;
    author: string;
    date: string;
  };
}

export const FORUM_CATEGORIES: ForumCategoryInfo[] = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'General topics and discussions',
    icon: 'MessageSquare',
    postCount: 156,
    lastPost: {
      title: 'Welcome to the community!',
      author: 'Admin',
      date: '2024-01-15T10:00:00Z',
    },
  },
  {
    id: 'tech-support',
    name: 'Technical Support',
    description: 'Get help with technical issues',
    icon: 'Code',
    postCount: 89,
    lastPost: {
      title: 'API integration question',
      author: 'Developer123',
      date: '2024-01-14T15:30:00Z',
    },
  },
  {
    id: 'business',
    name: 'Business & Strategy',
    description: 'Business discussions and strategies',
    icon: 'Briefcase',
    postCount: 67,
    lastPost: {
      title: 'Market analysis for Q1',
      author: 'BusinessUser',
      date: '2024-01-13T09:15:00Z',
    },
  },
  {
    id: 'announcements',
    name: 'Announcements',
    description: 'Official announcements and updates',
    icon: 'Megaphone',
    postCount: 23,
    lastPost: {
      title: 'New features released',
      author: 'Admin',
      date: '2024-01-12T14:00:00Z',
    },
  },
];