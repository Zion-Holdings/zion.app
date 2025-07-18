import { useState, useEffect } from 'react';
import { JobsList } from '@/components/jobs/JobsList'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import type { JobStatus } from '@/types/jobs'
import { SEO } from '@/components/SEO'
import { BriefcaseIcon, PlusCircle, Kanban } from '@/components/ui/icons';
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SuggestedTalents } from '@/components/jobs/SuggestedTalents'
import { useJobs } from '@/hooks/useJobs'
import { ClientOnboardingSteps } from '@/components/onboarding/ClientOnboardingSteps'
import { AdvancedOnboardingSteps } from '@/components/onboarding/AdvancedOnboardingSteps'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'
import { ActiveProjectsCard } from '@/components/projects/ActiveProjectsCard'
import { UpcomingInterviewsCard } from '@/components/interviews/UpcomingInterviewsCard'
import { useIsMobile } from '@/hooks/use-mobile';
'
function ClientDashboardContent(): ;
  const [_activeTab, setActiveTab] = useState<JobStatus | 'all'>('all');
  const { jobs, isLoading: "_isLoading "} = useJobs();"
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);"
  const [_selectedJobTitle, setSelectedJobTitle] = useState<string>('');
  const isMobile = useIsMobile();
  const onboardingStatus = useOnboardingStatus();