
import { useState } from "react";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost } from "@/types/community";

// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    author: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "Verified Talent"
    },
    authorId: "user1",
    category: "ai-tools",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
    replies: [],
    likes: 48,
    views: 120,
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isPinned: false,
    isLocked: false,
    isAnswered: true,
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent"
  },
  {
    id: "2",
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
    author: {
      id: "user2",
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Verified Talent"
    },
    authorId: "user2",
    category: "getting-hired",
    categoryId: "getting-hired",
    tags: ["profile", "tips", "hiring"],
    createdAt: "2025-04-03T09:15:00Z",
    updatedAt: "2025-04-03T09:15:00Z",
    replies: [],
    likes: 32,
    views: 89,
    upvotes: 32,
    downvotes: 0,
    replyCount: 8,
    isPinned: true,
    isLocked: false,
    isAnswered: false,
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    authorRole: "Verified Talent"
  }
];

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: "3",
    title: "Looking for feedback on my automated testing approach",
    content: "I've set up a CI/CD pipeline with the following testing strategy...",
    author: {
      id: "user3",
      name: "Michael Wong",
      avatar: "https://i.pravatar.cc/150?img=7",
      role: "Developer"
    },
    authorId: "user3",
    category: "project-help",
    categoryId: "project-help",
    tags: ["testing", "automation", "ci-cd"],
    createdAt: "2025-04-10T14:30:00Z",
    updatedAt: "2025-04-10T14:30:00Z",
    replies: [],
    likes: 5,
    views: 45,
    upvotes: 5,
    downvotes: 0,
    replyCount: 2,
    isPinned: false,
    isLocked: false,
    isAnswered: false,
    authorName: "Michael Wong",
    authorAvatar: "https://i.pravatar.cc/150?img=7",
    authorRole: "Developer"
  },
  {
    id: "4",
    title: "Feature request: Team collaboration tools",
    content: "It would be really helpful if we could have built-in tools for team collaboration...",
    author: {
      id: "user4",
      name: "Emma Davis",
      avatar: "https://i.pravatar.cc/150?img=9",
      role: "Product Manager"
    },
    authorId: "user4",
    category: "feedback",
    categoryId: "feedback",
    tags: ["feature-request", "teams", "collaboration"],
    createdAt: "2025-04-09T18:45:00Z",
    updatedAt: "2025-04-09T18:45:00Z",
    replies: [],
    likes: 12,
    views: 67,
    upvotes: 12,
    downvotes: 1,
    replyCount: 3,
    isPinned: false,
    isLocked: false,
    isAnswered: false,
    authorName: "Emma Davis",
    authorAvatar: "https://i.pravatar.cc/150?img=9",
    authorRole: "Product Manager"
  },
  {
    id: "5",
    title: "How to handle client scope creep?",
    content: "I'm working on a project where the client keeps adding requirements...",
    author: {
      id: "user5",
      name: "David Lin",
      avatar: "https://i.pravatar.cc/150?img=11",
      role: "Freelancer"
    },
    authorId: "user5",
    category: "project-help",
    categoryId: "project-help",
    tags: ["client-management", "scope", "projects"],
    createdAt: "2025-04-08T10:20:00Z",
    updatedAt: "2025-04-08T10:20:00Z",
    replies: [],
    likes: 24,
    views: 89,
    upvotes: 24,
    downvotes: 0,
    replyCount: 7,
    isPinned: false,
    isLocked: false,
    isAnswered: true,
    authorName: "David Lin",
    authorAvatar: "https://i.pravatar.cc/150?img=11",
    authorRole: "Freelancer"
  }
];

export default function CommunityPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
  
  return (
    <>
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://ziontechgroup.com/community"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, ask questions, and share your knowledge
            </p>
          </div>
          
          <CreatePostButton />
        </div>
        
        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
