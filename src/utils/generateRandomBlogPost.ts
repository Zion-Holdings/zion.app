import { BlogPost } from "@/types/blog";

const categories = [
  "Trends",
  "Marketing",
  "Sustainability",
  "Ethics",
  "Recruitment",
  "Infrastructure"
];

export function generateRandomBlogPost(): BlogPost {
  const timestamp = Date.now();
  const category = categories[Math.floor(Math.random() * categories.length)];

  return {
    id: `auto-${timestamp}`,
    title: `Automated Post ${new Date(timestamp).toLocaleTimeString()}`,
    slug: `auto-${timestamp}`,
    excerpt: "This is an automatically generated blog post.",
    content: `<p>This placeholder content was generated on ${new Date(timestamp).toLocaleString()}.</p>`,
    author: {
      name: "Auto Bot",
      title: "Content Automation",
      avatarUrl: "https://robohash.org/autobot.png"
    },
    publishedDate: new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }),
    readTime: "3 min read",
    category: category || 'General',
    tags: [(category || 'general').toLowerCase(), "automation"],
    featuredImage: "https://images.unsplash.com/photo-1581091012184-7b3403d00985?auto=format&fit=crop&w=1200&h=630"
  };
}
