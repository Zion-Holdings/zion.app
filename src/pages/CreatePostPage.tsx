import { useEffect } from 'react;
import { mutate } from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import PostForm from '@/components/community/PostForm'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast'
import type { ForumCategory } from '@/types/community'
import { logErrorToProduction } from '@/utils/productionLogger;
'
interface PostFormValues {
  title: "string"
  content: string,"
  categoryId: "ForumCategory"
  tags: "string'

export default function CreatePostPage(): ;
  const router = useRouter();';;