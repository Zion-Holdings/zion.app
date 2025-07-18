
import { useState } from "react";
import type { JobApplication, ApplicationStatus } from "@/types/jobs";
import { useJobApplications } from "@/hooks/useJobApplications";
import {
  ApplicationsTable,
  EmptyState,
  ErrorState,
  LoadingState,
  ScoreDialog
} from "./applications";

interface JobApplicationsTableProps {
  jobId: string;
}

export function JobApplicationsTable({ jobId }: JobApplicationsTableProps) {
  const { 
    applications, 
    isLoading, 
    error, 
    updateApplicationStatus, 
    markApplicationAsViewed,
    refetch
  } = useJobApplications(jobId);

  const [processingId, setProcessingId] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  
  const handleStatusChange = async (applicationId: string, _newStatus: string) => {
    setProcessingId(applicationId);
    try {
      await updateApplicationStatus(applicationId, newStatus as ApplicationStatus);
      // If it's not already viewed, mark it as viewed
      const application = applications.find(app => app.id === applicationId);
      if (application && !application.viewed_at) {
        await markApplicationAsViewed(applicationId);
      }
    } finally {
      setProcessingId(null);
    }
  };

  const handleViewScore = (_application: JobApplication) => {
    setSelectedApplication(application);
    setShowScoreDialog(true);
  };

  const handleViewApplication = async (_applicationId: string) => {
    await markApplicationAsViewed(applicationId);
  };

  const handleScoreUpdated = () => {
    refetch();
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (applications.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <ApplicationsTable
        applications={applications}
        processingId={processingId}
        onViewApplication={handleViewApplication}
        onStatusChange={handleStatusChange}
        onViewScore={handleViewScore}
      />

      <ScoreDialog
        open={showScoreDialog}
        onOpenChange={setShowScoreDialog}
        application={selectedApplication}
        onScoreUpdated={handleScoreUpdated}
      />
    </>
  );
}
