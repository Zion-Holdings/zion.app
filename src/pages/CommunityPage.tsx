import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import CreatePostButton from '@/components/community/CreatePostButton'
import { LoginModal } from '@/components/auth/LoginModal'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import ForumCategories from '@/components/community/ForumCategories'
import PostCard from '@/components/community/PostCard'
import NewPostDialog from '@/components/community/NewPostDialog'
import { ChatAssistantTrigger } from '@/components/ChatAssistantTrigger'
import { useRequireAuth } from '@/hooks/useAuthGuard'
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'
import { useCommunity } from '@/context'
import type { ForumCategory } from '@/types/community'
import { logErrorToProduction } from '@/utils/productionLogger'
import { logInfo } from '@/utils/productionLogger;
'
export defaultault function CommunityPage(): ;
  logInfo('CommunityPage rendering');
  const { user, loading } = useRequireAuth()'
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState('categories');
  const router = useRouter();