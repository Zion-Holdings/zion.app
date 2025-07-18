import React, { useState, useEffect } from 'react';
import { MessageSquare } from '@/components/ui/icons'
import { useRouter } from 'next/router'
import { TalentProfile } from '@/components/profile/TalentProfile'
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState'
import { ProfileErrorState } from '@/components/profile/ProfileErrorState'
import { BackToDirectoryButton } from '@/components/profile/BackToDirectoryButton'
import { useTalentProfile } from '@/hooks/useTalentProfile'
import { HireRequestModal } from '@/components/profile/hire-request'
import { useAuthStatus } from '@/hooks/talent'
import { MessageTalentModal } from '@/components/messaging/MessageTalentModal'
import { StickyAction } from '@/components/ui/sticky-action;;
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import type { UserProfile } from '@/types/auth'
import { toast } from '@/hooks/use-toast'
import  { SEO }  from '@/components/SEO;
export default function TalentProfilePage(): ;
  const router = useRouter();