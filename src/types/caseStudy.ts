export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  company: string;
  companyLogo: string;
  avatar: string;
  quote: string;
  author: string;
  role: string;
  featuredImage: string;
  publishedDate?: string;
  /** URL of downloadable case study PDF */
  pdf: string;
}
