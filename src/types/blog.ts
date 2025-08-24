export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  imageUrl?: string;
  readTime: number;
  category: string;
  slug: string;
}