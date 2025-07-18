<<<<<<< HEAD
import { useState } from 'react';;
import type { JobApplication, ApplicationStatus } from '@/types/jobs;;
import { useJobApplications } from '@/hooks/useJobApplications;;
import {;
  ApplicationsTable,;''
  EmptyState,;
  ErrorState,;
  LoadingState,;''
  ScoreDialog,;;
} from './applications;'
;''
interface JobApplicationsTableProps {;;
  jobId: "string;";"
};

=======
import { useState } from 'react''
import type { JobApplication, ApplicationStatus } from '@/types/jobs'
import { useJobApplications } from '@/hooks/useJobApplications'
import {;
  ApplicationsTable,'
  EmptyState,'
  ErrorState,
  LoadingState,'
  ScoreDialog,'
} from './applications'
'
interface JobApplicationsTableProps {'
  jobId: "string

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function JobApplicationsTable(): unknown {): unknown {): unknown {): unknown {): unknown {{ jobId }: JobApplicationsTableProps) {;
  const { ;
    applications,;
    isLoading,;
    error,;
    updateApplicationStatus,;
    markApplicationAsViewed,;
    refetch,; } = useJobApplications(jobId);
  const [processingId, setProcessingId] = useState<string | null>(null);
<<<<<<< HEAD
  const [selectedApplication, setSelectedApplication] =;""
    useState<JobApplication | null>(null);";""
  const [showScoreDialog, setShowScoreDialog] = useState(false);";";""
;";";";""
  const handleStatusChange: unknown = async (;";,";";";""
    applicationId: "string",;";";";";""
    _newStatus: "string",;"
  ) => {;
    setProcessingId(applicationId);
    try {;""
      await updateApplicationStatus(;";""
        applicationId,;";";""
        newStatus as ApplicationStatus,;";";";""
      );";";";";""
      // If it's not already viewed, mark it as viewed;'
      const application: unknown = applications.find((app) => app.id === applicationId);
=======
  const [selectedApplication, setSelectedApplication] ="
    useState<JobApplication | null>(null);"
  const [showScoreDialog, setShowScoreDialog] = useState(false);";"
;";"
  const handleStatusChange = async (;,";"
    applicationId: string",""
    _newStatus: string,"
  ) => {;
    setProcessingId(applicationId);
    try {"
      await updateApplicationStatus(;
        applicationId,;"";
        newStatus as ApplicationStatus,;"";
      );"""
      // If it's not already viewed, mark it as viewed'
      const application = applications.find((app) => app.id === applicationId);
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      if (application && !application.viewed_at) {;
        await markApplicationAsViewed(applicationId);
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
    } finally {;
      setProcessingId(null);
    };
  };

  const handleViewScore = (_application: JobApplication) => {;
    setSelectedApplication(application);
    setShowScoreDialog(true);
  };

  const handleViewApplication = async (_applicationId: string) => {;
    await markApplicationAsViewed(applicationId);
  };

  const handleScoreUpdated = () => {;
    refetch();
  };

  if (isLoading) {;
    return <LoadingState />;
  };

  if (error) {;
    return <ErrorState error={error} />;
  };

  if (applications.length === 0) {;
    return <EmptyState />;
  };

  return (;
    <>;
      <ApplicationsTable;
        applications={applications};
        processingId={processingId};
        onViewApplication={handleViewApplication};
        onStatusChange={handleStatusChange};
        onViewScore={handleViewScore};
      />;

      <ScoreDialog;
        open={showScoreDialog};
        onOpenChange={setShowScoreDialog};
        application={selectedApplication};
        onScoreUpdated={handleScoreUpdated};
<<<<<<< HEAD
      />;''
    </>;
  );
};

};''

}''
}''
=======
      />'
    </>'
  );
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
