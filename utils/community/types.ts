export type UserRole = 'Client' | 'Talent' | 'Verified' | 'Moderator' | 'Admin';

export type BadgeId = 'first_post' | 'top_contributor' | 'answer_hero';

export type ForumCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  isAdminOnly?: boolean;
};

export type VoteDirection = 1 | -1;

export type ForumReply = {
  id: string;
  threadId: string;
  parentReplyId?: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  body: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
};

export type ForumThread = {
  id: string;
  categoryId: string;
  title: string;
  body: string;
  tags: string[];
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  votes: number;
  replyCount: number;
  isAnswered: boolean;
  isPinned: boolean;
  isLocked: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  id: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  reputation: number;
  badges: BadgeId[];
};

export type Report = {
  id: string;
  targetType: 'thread' | 'reply';
  targetId: string;
  reporterId: string;
  reason: string;
  createdAt: string;
};

export type CommunityDb = {
  categories: ForumCategory[];
  threads: ForumThread[];
  replies: ForumReply[];
  users: UserProfile[];
  reports: Report[];
};

export type ThreadFilters = {
  categoryId?: string;
  tag?: string;
  sort?: 'new' | 'top' | 'active';
};