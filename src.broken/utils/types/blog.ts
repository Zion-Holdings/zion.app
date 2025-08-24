export interface BlogSEO {
  metaTitle: string;
  metaDescription: string;
  ogImageUrl?: string;
}

export type PostStatus = 'draft' | 'published';

export interface BlogMetrics {
  views: number;
  likes: number;
  shares: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImageUrl?: string;
  author: string;
  publishDate: string; // ISO string
  tags: string[];
  topics: string[];
  seo: BlogSEO;
  body: string; // Markdown or HTML
  status: PostStatus;
  metrics: BlogMetrics;
}