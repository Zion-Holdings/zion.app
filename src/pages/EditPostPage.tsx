import { useState, useEffect } from 'react;
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import PostForm from '@/components/community/PostForm'
import { useToast } from '@/hooks/use-toast'
import type { ForumPost, ForumCategory } from '@/types/community'
import { useAuth } from '@/hooks/useAuth;
'
interface PostFormValues {
  title: "string"
  content: string,"
  categoryId: "ForumCategory"
  tags: "string'

export default function EditPostPage(): ;
  const router = useRouter();';;