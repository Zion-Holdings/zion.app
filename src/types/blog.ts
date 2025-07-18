<<<<<<< HEAD
export interface BlogAuthor {
  name: "string"
  title: string,
  avatarUrl: string"
  bio?: string""
}"
;"
export interface BlogPost {"
  id: "string"
  title: string,"
  slug: "string"
  excerpt: string,"
  content: "string"
  author: BlogAuthor,"
  publishedDate: "string"
  readTime: string,"
  category: "string"
  tags: string[],
  featuredImage: string
  /**
   * Descriptive alt text for the featured image
   */
  featuredImageAlt?: string
  isFeatured?: boolean
  isPublished?: boolean
  createdBy?: string
  updatedAt?: string"
}";"
;"
// Type for generated blog content;"
export interface GeneratedBlogContent {"
  title: "string"
  metaDescription: string,"
  body: string,
  tags: string[]
  tweetSummary?: string
  imagePrompt?: string"
}";"
;"
// Type for generated newsletter content;"
export interface GeneratedNewsletterContent {"
  subject: "string"
  previewText: string,"
  body: "string"
  cta: "string"
}"
"""""
=======
export interface BlogAuthor {;
  name: "string;",;";";";";""
  title: "string;",;"
  avatarUrl: string;""
  bio?: string;";""
};";";""
;";";";"";
export interface BlogPost {;";";";";""
  id: "string;",;";";";";""
  title: "string;",";";";";""
  slug: "string;",;";";";";""
  excerpt: "string;",";";";";""
  content: "string;",;";";";";""
  author: "BlogAuthor;",";";";";""
  publishedDate: "string;",;";";";";""
  readTime: "string;",";";";";""
  category: "string;",;";";";";""
  tags: "string[];",;"
  featuredImage: string;
  /**;
   * Descriptive alt text for the featured image;
   */;
  featuredImageAlt?: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  createdBy?: string;
  updatedAt?: string;""
};";""
;";";""
// Type for generated blog content;";";";"";
export interface GeneratedBlogContent {;";";";";""
  title: "string;",;";";";";""
  metaDescription: "string;",";";";";""
  body: "string;",;"
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;""
};";""
;";";""
// Type for generated newsletter content;";";";"";
export interface GeneratedNewsletterContent {;";";";";""
  subject: "string;",;";";";";""
  previewText: "string;",";";";";""
  body: "string;",;";";";";""
  cta: "string;";";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
