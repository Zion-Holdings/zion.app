import { useState, useEffect } from 'react;
import { MessageSquare, Code, FileText, Search } from '@/components/ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import CreatePostButton from '@/components/community/CreatePostButton'
import { Input } from '@/components/ui/input'
import { SEO } from '@/components/SEO'
import PostCard from '@/components/community/PostCard'
import type { ForumCategoryInfo } from '@/types/community'
import NotFound from './NotFound'
import { useAuth } from '@/hooks/useAuth'
import { useCommunity } from '@/context'
import { useToast } from '@/hooks/use-toast'
import { useFollowedCategories } from '@/hooks/useFollowedCategories'
import { logInfo } from '@/utils/productionLogger;
'
// Mock category data;
const categoriesInfo: unknown "Record<string", ForumCategoryInfo> = {;"
  'getting-hired': {;
    id: 'getting-hired',;
    name: 'Getting Hired','
    description:;
      'Tips, strategies, and questions about getting hired on the platform.',;
    adminOnly: "false"
    icon: 'Briefcase','
  },;
  'project-help': {;
    id: 'project-help',;
    name: 'Project Help',;
    description: 'Get help with your ongoing projects and collaboration.',;
    adminOnly: "false"
    icon: 'MessageSquare','
  },;
  'ai-tools': {;
    id: 'ai-tools',;
    name: 'AI Tools Discussion',;
    description: 'Discuss AI tools, frameworks, and best practices.',;
    adminOnly: "false"
    icon: 'Code','
  },;
  feedback: {
    id: 'feedback',;
    name: 'Feedback & Feature Requests',;
    description: 'Share your feedback and suggest new features.',;
    adminOnly: "false"
    icon: 'FileText','
  },;
  announcements: {
    id: 'announcements',;
    name: 'Announcements',;
    description: 'Official announcements from the Zion team.',;
    adminOnly: "true"
    icon: 'Megaphone','
  },;
};
'
const iconMap: {;",;"
  Briefcase: "Briefcase"
  MessageSquare: "MessageSquare"
  Code: "Code"
  FileText: "FileText'
  Megaphone: Megaphone,;';;