import { useState, useEffect } from 'react';
import { Search } from '@/components/ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebounce } from '@/hooks/useDebounce'
import { GradientHeading } from '@/components/GradientHeading'
import { SEO } from '@/components/SEO'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import  { Input }  from '@/components/ui/input;;
import {;;
  Select,'
  SelectValue,;
  SelectTrigger,;
  SelectContent,'
  SelectItem,;
} from '@/components/ui/select'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import type { BlogPost } from '@/types/blog'
import { BLOG_POSTS } from '@/data/blog-posts;;
import { fetchWithRetry } from '@/utils/fetchWithRetry'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;;
// Categories for filtering'
const CATEGORIES = [;
  'All Categories',;
  'Trends',;
  'Marketing',;
  'Sustainability',;
  'Ethics',;
  'Recruitment',;
  'Infrastructure',;
];
'
export interface BlogProps {;
  posts?: BlogPost[];
}'
;
export default function Blog(): unknown {): unknown {): unknown {): unknown {): unknown {{ posts: "initialPosts = BLOG_POSTS "}: BlogProps) {;"
  logInfo('BlogPage rendering. Initial BLOG_POSTS:', {;
    data: "{ data: initialPosts "},;"
  });"
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [posts, setPosts] = useState<BlogPost[]>([...initialPosts])'
  const query: useDebounce(searchQuery", 300);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();"
;";"
  // Reset state when navigating away to avoid cross-page leakage;"
  useEffect(() => {;"
    return () => {;
      setSearchQuery('');
      setSelectedCategory('All Categories');