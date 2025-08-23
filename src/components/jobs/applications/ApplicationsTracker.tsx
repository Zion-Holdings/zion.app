
import { useState } from "react";
import { useJobApplications } from "@/hooks/useJobApplications";
import { ApplicationCard } from "./ApplicationCard";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";

export function ApplicationsTracker() {
  const { applications, isLoading, error } = useJobApplications();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  
  if (isLoading) {
    return <LoadingState />;
  }
  
  if (error) {
    return <ErrorState error={error} />;
  }
  
  if (applications.length === 0) {
    return <EmptyState />;
  }
  
  const filteredApplications = statusFilter === 'all' 
    ? applications
    : applications.filter(app => app.status === statusFilter);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          size="sm"
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
        >
          All
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'new' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('new')}
        >
          Submitted
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('viewed')}
        >
          Viewed
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('shortlisted')}
        >
          Shortlisted
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('interview')}
        >
          Interview
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('hired')}
        >
          Hired
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('rejected')}
        >
          Not Selected
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
      
      {filteredApplications.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">No applications with this status.</p>
        </div>
      )}
    </div>
  );
}
