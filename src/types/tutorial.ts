export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  author?: string | { name: string; title?: string; avatarUrl?: string };
  publishedDate?: string;
  readTime?: string;
}
