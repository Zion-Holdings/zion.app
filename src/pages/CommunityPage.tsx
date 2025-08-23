import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CreatePostButton from "@/components/community/CreatePostButton";
import { LoginModal } from "@/components/auth/LoginModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import NewPostDialog from "@/components/community/NewPostDialog";
import { ChatAssistantTrigger } from "@/components/ChatAssistantTrigger";
import { useRequireAuth } from "@/hooks/useAuthGuard";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
import { useCommunity } from "@/context";
import type { ForumCategory } from "@/types/community";
import { logErrorToProduction } from '@/utils/productionLogger';
import { logInfo } from '@/utils/productionLogger';

export default function CommunityPage() {

  logInfo('CommunityPage rendering');
  const { user, loading } = useRequireAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const router = useRouter();
  const [showNewPost, setShowNewPost] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { markCommunityVisited } = useAdvancedOnboardingStatus();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading community...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Combine posts for Q&A section, removing duplicates by id
  const qaPosts = Array.from(
    new Map(
      [...featuredPosts, ...recentPosts].map((post) => [post.id, post])
    ).values()
  );

  const initialCategory = router.query.category as ForumCategory | null;

  useEffect(() => {
    const wantsNew = router.query.new === "1";
    if (wantsNew && !user) {
      setLoginOpen(true);
      setShowNewPost(false);
      return;
    }
    setShowNewPost(wantsNew && !!user);
    if (user) {
      setLoginOpen(false);
    }
    markCommunityVisited();
  }, [router, user, initialCategory, markCommunityVisited]);

  // Handle tab changes in URL query params for better UX
  useEffect(() => {
    const tab = router.query.tab as string;
    if (tab && ["categories", "featured", "recent", "qa"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [router.query.tab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL to reflect active tab
    const newQuery = { ...router.query, tab: value };
    router.replace({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
  };

  const handleDialogChange = (open: boolean) => {
    setShowNewPost(open);
    if (!open) {
      const currentQuery = { ...router.query };
      delete currentQuery.new;
      router.replace({ pathname: router.pathname, query: currentQuery }, undefined, { shallow: true });
    }
  };

  const handleLoginModalChange = (open: boolean) => {
    setLoginOpen(open);
    if (!open) {
      const currentQuery = { ...router.query };
      delete currentQuery.new;
      router.replace({ pathname: router.pathname, query: currentQuery }, undefined, { shallow: true });
    }
  };

  logInfo('CommunityPage featuredPosts:', { data: featuredPosts });
  logInfo('CommunityPage recentPosts:', { data: recentPosts });
  logInfo('CommunityPage activeTab:', { data: activeTab });
  
  if (!featuredPosts || !recentPosts) {
    logErrorToProduction('CommunityPage: Posts data is missing from context!', undefined, { message: 'CommunityPage: Posts data is missing from context!' });
  }
  
  return (
    <>
      <SEO
        title="Community - Join the Zion Tech Marketplace Network"
        description="Connect with innovators in the Zion Tech Marketplace community. Share ideas, collaborate on projects, and expand your tech network today. Gain points and unlock resources."
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
          
          <CreatePostButton onRequireLogin={(target) => {
            router.push(target);
            setLoginOpen(true);
          }} />
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts && featuredPosts.length > 0 ? (
                featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No featured posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts && recentPosts.length > 0 ? (
                recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No recent posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="qa">
            <div className="space-y-4">
              {qaPosts && qaPosts.length > 0 ? (
                qaPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No Q&A posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <NewPostDialog
        open={showNewPost}
        onOpenChange={handleDialogChange}
        initialCategory={initialCategory}
      />
      <LoginModal isOpen={loginOpen} onOpenChange={handleLoginModalChange} />
      <ChatAssistantTrigger />
    </>
  );
}
