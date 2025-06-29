import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import NewPostDialog from "@/components/community/NewPostDialog";
import { ChatAssistantTrigger } from "@/components/ChatAssistantTrigger";
import { useAuth } from "@/hooks/useAuth";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
import { useCommunity } from "@/context";
import type { ForumCategory } from "@/types/community";
import { logError } from "@/utils/logError";
import { logInfo } from '@/utils/productionLogger';

export default function CommunityPage() {

  logInfo('CommunityPage rendering');
  const { t } = useTranslation();
  const { user } = useAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const router = useRouter();
  const [showNewPost, setShowNewPost] = useState(false);
  const { markCommunityVisited } = useAdvancedOnboardingStatus();

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
      const returnTo = encodeURIComponent(`/community?new=1${initialCategory ? `&category=${initialCategory}` : ""}`);
      router.replace(`/auth/login?returnTo=${returnTo}`);
      return;
    }
    setShowNewPost(wantsNew && !!user);
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

  logInfo('CommunityPage featuredPosts:', { data: featuredPosts });
  logInfo('CommunityPage recentPosts:', { data: recentPosts });
  logInfo('CommunityPage activeTab:', { data: activeTab });
  
  if (!featuredPosts || !recentPosts) {
    logError(new Error('CommunityPage: Posts data is missing from context!'), { message: 'CommunityPage: Posts data is missing from context!' });
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
            <h1 className="text-3xl font-bold">{t('community_page.title')}</h1>
            <p className="text-muted-foreground mt-2">
              {t('community_page.subtitle')}
            </p>
          </div>
          
          <CreatePostButton />
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">{t('categories')}</TabsTrigger>
            <TabsTrigger value="featured">{t('featured')}</TabsTrigger>
            <TabsTrigger value="recent">{t('recent')}</TabsTrigger>
            <TabsTrigger value="qa">{t('q_and_a')}</TabsTrigger>
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
                  <p>{t('community_page.no_featured')}</p>
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
                  <p>{t('community_page.no_recent')}</p>
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
                  <p>{t('community_page.no_qa')}</p>
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
      <ChatAssistantTrigger />
    </>
  );
}
