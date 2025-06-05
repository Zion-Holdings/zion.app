
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import NewPostDialog from "@/components/community/NewPostDialog";
import { useAuth } from "@/hooks/useAuth";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
import { useCommunity } from "@/context";
import type { ForumCategory } from "@/types/community";


export default function CommunityPage() {
  console.log('CommunityPage rendering');
  const { user } = useAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showNewPost, setShowNewPost] = useState(false);
  const { markCommunityVisited } = useAdvancedOnboardingStatus();

  const initialCategory = searchParams.get("category") as ForumCategory | null;

  useEffect(() => {
    const wantsNew = searchParams.get("new") === "1";
    if (wantsNew && !user) {
      const next = encodeURIComponent(`/community?new=1${initialCategory ? `&category=${initialCategory}` : ""}`);
      navigate(`/login?next=${next}`, { replace: true });
      return;
    }
    setShowNewPost(wantsNew && !!user);
    markCommunityVisited();
  }, [searchParams, user, navigate, initialCategory, markCommunityVisited]);

  const handleDialogChange = (open: boolean) => {
    setShowNewPost(open);
    if (!open) {
      searchParams.delete("new");
      setSearchParams(searchParams, { replace: true });
    }
  };

  console.log('CommunityPage featuredPosts:', featuredPosts);
  console.log('CommunityPage recentPosts:', recentPosts);
  if (!featuredPosts || !recentPosts) {
    console.error('CommunityPage: Posts data is missing from context!');
  }
  
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
        
        {/* {featuredPosts && featuredPosts.length > 0 ? (
          <>
            <p>Attempting to render a PostCard directly.</p>
            <PostCard post={featuredPosts[0]} />
          </>
        ) : (
          <p>No featured posts available to render a PostCard directly.</p>
        )} */}

        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
            {/* <p>Categories Tab Content</p> */}
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {/* <p>Featured Tab Content</p> */}
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {/* <p>Recent Tab Content</p> */}
          </TabsContent>
        </Tabs>
        {/* <p>Attempting to render ForumCategories directly.</p>
        <ForumCategories /> */}
      </div>

      <NewPostDialog
        open={showNewPost}
        onOpenChange={handleDialogChange}
        initialCategory={initialCategory}
      />
    </>
  );
}
