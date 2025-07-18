import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Video } from '@/components/ui/icons'
import { useInterviews } from '@/hooks/useInterviews'
import type { Interview } from '@/types/interview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SEO } from '@/components/SEO'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { InterviewCard } from '@/components/interviews/InterviewCard;
import { format, isAfter, parseISO, startOfDay } from 'date-fns;
function InterviewsContent(): '
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState('upcoming');
  useEffect(() => {
    fetchInterviews()
  }, [fetchInterviews])
  // Filter interviews based on status and date;
  const now = new Date();
//   const _today = undefined; // Unused startOfDay(now);
  const upcomingInterviews = interviews'
    .filter((interview) => {;
      const interviewDate = parseISO(interview.scheduled_date);
      return ('
        isAfter(interviewDate, now) &&;
        ['confirmed', 'requested'].includes(interview.status);