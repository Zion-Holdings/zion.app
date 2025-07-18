import { useState, useEffect } from 'react;
import { Calendar, Flag, Edit, Lock, CheckCircle } from '@/components/ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert;
import { formatDistanceToNow, format } from 'date-fns'
import type { ForumPost, ForumReply } from '@/types/community'
import { useAuth } from '@/hooks/useAuth'
import ReplyCard from '@/components/community/ReplyCard'
import ReplyForm from '@/components/community/ReplyForm'
import { useToast } from '@/hooks/use-toast;
export default function ForumPostPage(): '
  // Using `useParams` without type arguments avoids issues when TypeScript;
  // can't determine the generic type for the helper from React Router.;';;`