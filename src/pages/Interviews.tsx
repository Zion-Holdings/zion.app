
import React, { useEffect, useState } from "react";
import { useInterviews } from "@/hooks/useInterviews";
import { Interview } from "@/types/interview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { InterviewCard } from "@/components/interviews/InterviewCard";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from 'lucide-react';



import { format, isAfter, parseISO, startOfDay } from "date-fns";

function InterviewsContent() {
  const { interviews, isLoading, fetchInterviews } = useInterviews();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  useEffect(() => {
    // Modified to handle Promise<Interview[]> return type
    const loadInterviews = async () => {
      await fetchInterviews();
    };
    
    loadInterviews();
  }, []);

  // Filter interviews based on status and date
  const now = new Date();
  const today = startOfDay(now);
  
  const upcomingInterviews = interviews
    .filter((interview) => {
      const interviewDate = parseISO(interview.scheduled_date);
      return isAfter(interviewDate, now) && 
        ['confirmed', 'requested'].includes(interview.status);
    })
    .sort((a, b) => 
      parseISO(a.scheduled_date).getTime() - parseISO(b.scheduled_date).getTime()
    );
  
  const pendingInterviews = interviews.filter(interview => 
    interview.status === 'requested'
  );
  
  const pastInterviews = interviews.filter(interview => {
    const interviewDate = parseISO(interview.scheduled_date);
    return !isAfter(interviewDate, now) || 
      ['completed', 'declined', 'cancelled'].includes(interview.status);
  });

  // Group interviews by date
  const groupInterviewsByDate = (interviews: Interview[]) => {
    const grouped: Record<string, Interview[]> = {};
    
    interviews.forEach((interview) => {
      const dateKey = format(parseISO(interview.scheduled_date), 'yyyy-MM-dd');
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(interview);
    });
    
    return grouped;
  };
  
  const upcomingGrouped = groupInterviewsByDate(upcomingInterviews);
  const pendingGrouped = groupInterviewsByDate(pendingInterviews);
  const pastGrouped = groupInterviewsByDate(pastInterviews);

  const renderInterviewGroups = (groupedInterviews: Record<string, Interview[]>) => {
    return Object.entries(groupedInterviews)
      .sort(([dateA], [dateB]) => 
        parseISO(dateA).getTime() - parseISO(dateB).getTime()
      )
      .map(([date, interviews]) => (
        <div key={date} className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviews.map((interview) => (
              <InterviewCard 
                key={interview.id} 
                interview={interview}
                onRefresh={async () => {
                  await fetchInterviews();
                }}
              />
            ))}
          </div>
        </div>
      ));
  };

  return (
    <>
      <SEO 
        title="Interviews | Zion AI Marketplace" 
        description="Manage your scheduled interviews with clients and talent" 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Interviews</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your video interviews</p>
          </div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Upcoming
              {upcomingInterviews.length > 0 && (
                <span className="ml-2 bg-primary rounded-full px-2 py-0.5 text-xs">
                  {upcomingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingInterviews.length > 0 && (
                <span className="ml-2 bg-amber-500 rounded-full px-2 py-0.5 text-xs">
                  {pendingInterviews.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : upcomingInterviews.length > 0 ? (
              renderInterviewGroups(upcomingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No upcoming interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any scheduled interviews coming up.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pending" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pendingInterviews.length > 0 ? (
              renderInterviewGroups(pendingGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No pending interviews</h3>
                <p className="text-muted-foreground mb-6">You don't have any interview requests that need your attention.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : pastInterviews.length > 0 ? (
              renderInterviewGroups(pastGrouped)
            ) : (
              <div className="text-center py-12 bg-zion-blue-dark/40 rounded-lg border border-zion-blue-light">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No past interviews</h3>
                <p className="text-muted-foreground">Your interview history will appear here.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}

export default function Interviews() {
  return (
    <ProtectedRoute>
      <InterviewsContent />
    </ProtectedRoute>
  );
}
