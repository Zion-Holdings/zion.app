export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  authorId: string;
  category: string;
  categoryId: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  replies: ForumReply[];
  likes: number;
  views: number;
  upvotes: number;
  downvotes: number;
  replyCount: number;
  isPinned: boolean;
  isLocked: boolean;
  isAnswered: boolean;
  authorName: string;
  authorAvatar: string;
  authorRole: string;
}

export interface ForumReply {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  postId: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  isSolution: boolean;
  isAnswer: boolean;
}

export interface ForumCategoryInfo {
  id: string;
  name: string;
  description: string;
  postCount: number;
  adminOnly: boolean;
  icon: string;
  lastPost?: {
    title: string;
    author: string;
    date: string;
  };
}