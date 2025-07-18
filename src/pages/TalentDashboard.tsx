import { useState } from 'react';
import { MessageSquare, Star } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { SEO } from '@/components/SEO;
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SuggestedJobs } from '@/components/jobs/SuggestedJobs'
import  { useAuth }  from '@/hooks/useAuth;
import {;
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { TalentOnboardingSteps } from '@/components/onboarding/TalentOnboardingSteps'
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { MyApplications } from '@/components/jobs/MyApplications'
import { ProjectOfferBanner } from '@/components/projects/ProjectOfferBanner'
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard;
function TalentDashboardContent(): '
  const { _user } = useAuth();
  const [, setActiveTab] = useState('job-matches');
  const onboardingStatus = useOnboardingStatus();