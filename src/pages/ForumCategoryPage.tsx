
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import PostCard from "@/components/community/PostCard";
import { ForumCategoryInfo } from "@/types/community";
import { usePostsByCategory } from "@/hooks/usePostsByCategory";
import NotFound from "./NotFound";
import { useAuth } from "@/hooks/useAuth";
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
} from "@/components/icons";

// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
  "project-help": {
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    adminOnly: false,
    icon: "MessageSquare"
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  "feedback": {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    adminOnly: false,
    icon: "FileText"
  },
  "announcements": {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: "Megaphone"
  }
};


const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
};

function CategoryContent({
  categoryId,
  category,
  IconComponent,
  user,
}: {
  categoryId: string;
  category: ForumCategoryInfo;
  IconComponent: React.ComponentType<any>;
  user: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: posts = [],
    isPending: loading,
    error,
  } = usePostsByCategory(categoryId);
  const errorMessage = error instanceof Error ? error.message : null;

  const filteredPosts = searchQuery
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts;

  const canCreatePost =
    categoryId !== "announcements" || (user?.userType === "admin" || user?.role === "admin");

  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
          Forum
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium">{category.name}</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-zion-purple/10 rounded-full">
            <IconComponent className="h-8 w-8 text-zion-purple" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-1">{category.description}</p>
          </div>
        </div>

        {canCreatePost && <CreatePostButton categoryId={categoryId} />}
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts in this category..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16">Loading...</div>
      ) : errorMessage ? (
        <div className="text-center py-16 text-destructive">{errorMessage}</div>
      ) : posts.length > 0 ? (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-medium mb-2">No posts yet</h2>
          <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>

          {canCreatePost && <CreatePostButton categoryId={categoryId} />}
        </div>
      )}
    </div>
  );
}

export default function ForumCategoryPage() {
  const { categoryId } = useParams();
  const { user } = useAuth();

  if (!categoryId || !categoriesInfo[categoryId]) {
    return <NotFound />;
  }

  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare;

  return (
    <>
      <SEO
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
        canonical={`https://app.ziontechgroup.com/community/category/${categoryId}`}
      />

      <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
        <CategoryContent
          categoryId={categoryId}
          category={category}
          IconComponent={IconComponent}
          user={user}
        />
      </Suspense>
    </>
  );
}
