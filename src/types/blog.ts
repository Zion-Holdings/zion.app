export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    avatarUrl: string;
    bio: string;
    title?: string;
  };
  publishedAt: string;
  publishedDate: string;
  tags: string[];
  category: string;
  readTime: number;
  featuredImage?: string;
  isFeatured?: boolean;
}