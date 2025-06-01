
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import NewPostDialog from "@/components/community/NewPostDialog";
import { useAuth } from "@/hooks/useAuth";
import { useCommunity } from "@/context";
import type { ForumCategory } from "@/types/community";


export default function CommunityPage() {
  const { user } = useAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showNewPost, setShowNewPost] = useState(false);

  const initialCategory = searchParams.get("category") as ForumCategory | null;

  useEffect(() => {
    const wantsNew = searchParams.get("new") === "1";
    if (wantsNew && !user) {
      const next = encodeURIComponent(`/community?new=1${initialCategory ? `&category=${initialCategory}` : ""}`);
      navigate(`/login?next=${next}`, { replace: true });
      return;
    }
    setShowNewPost(wantsNew && !!user);
  }, [searchParams, user, navigate, initialCategory]);

  const handleDialogChange = (open: boolean) => {
    setShowNewPost(open);
    if (!open) {
      searchParams.delete("new");
      setSearchParams(searchParams, { replace: true });
    }
  };
  
  return (
    <>
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://app.ziontechgroup.com/community"
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

      <NewPostDialog
        open={showNewPost}
        onOpenChange={handleDialogChange}
        initialCategory={initialCategory}
      />
    </>
  );
}
