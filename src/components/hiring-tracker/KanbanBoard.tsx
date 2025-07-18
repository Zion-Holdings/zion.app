<<<<<<< HEAD
import { useState, useEffect } from 'react;'
// Use a lightweight local stub for drag-and-drop to avoid missing dependency;;
// errors when the real package isn't installed.;;';
import { DragDropContext } from '@/lib/dnd-stub;'';
import { useJobApplications } from '@/hooks/useJobApplications;'';
import type { JobApplication, ApplicationStatus } from '@/types/jobs;'';
import { Card, CardContent, CardHeader } from '@/components/ui/card;'';
import Skeleton from '@/components/ui/skeleton;'';
import { toast } from '@/hooks/use-toast;'';
import { KanbanColumn } from './KanbanColumn;'';
import { useIsMobile } from '@/hooks/use-mobile;'
;''
interface DnDLocation {;;
  droppableId: "string;",;";";";";""
  index: "number;";";""
};";";""
;";";";""
interface DropResult {;";";";";""
  draggableId: "string;",;"
  source: DnDLocation;
  destination?: DnDLocation | null;
};""
;";""
// Define the kanban board columns based on application statuses;";";"";
const COLUMNS: unknown = [;";";";""
  {;";";";";""
    id: 'new',;;'
    title: 'Applied',;;'
    description: 'New applications',;'
  },;''
  {;;
    id: 'shortlisted',;;'
    title: 'Shortlisted',;;'
    description: 'Candidates selected for review',;'
  },;''
  {;;
    id: 'interview',;;'
    title: 'Interview',;;'
    description: 'Scheduled for interview',;'
  },;''
  {;;
    id: 'hired',;;'
    title: 'Hired',;;'
    description: 'Successful candidates',;'
  },;''
  {;;
    id: 'rejected',;;'
    title: 'Rejected',;;'
    description: 'Not moving forward',;'
=======
import { useState, useEffect } from 'react'
// Use a lightweight local stub for drag-and-drop to avoid missing dependency;
// errors when the real package isn't installed.'
import { DragDropContext } from '@/lib/dnd-stub'
import { useJobApplications } from '@/hooks/useJobApplications'
import type { JobApplication, ApplicationStatus } from '@/types/jobs'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Skeleton from '@/components/ui/skeleton'
import { toast } from '@/hooks/use-toast'
import { KanbanColumn } from './KanbanColumn'
import { useIsMobile } from '@/hooks/use-mobile'
'
interface DnDLocation {'
  droppableId: "string,"
  index: "number"
}"";"";
interface DropResult {""
  draggableId: string,
  source: DnDLocation
  destination?: DnDLocation | null

""
// Define the kanban board columns based on application statuses;"
const COLUMNS = [";"
  {";""
    id: 'new','
    title: 'Applied','
    description: 'New applications','
  },'
  {'
    id: 'shortlisted','
    title: 'Shortlisted','
    description: 'Candidates selected for review','
  },'
  {'
    id: 'interview','
    title: 'Interview','
    description: 'Scheduled for interview','
  },'
  {'
    id: 'hired','
    title: 'Hired','
    description: 'Successful candidates','
  },'
  {'
    id: 'rejected','
    title: 'Rejected','
    description: 'Not moving forward','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  },;
];

interface KanbanBoardProps {
  jobId?: string

export function KanbanBoard(): unknown {): unknown {): unknown {): unknown {): unknown {{ jobId }: KanbanBoardProps) {;
  const { applications, isLoading, updateApplicationStatus } = ;
    useJobApplications(jobId);
  const [columns, setColumns] = useState<Record<string, JobApplication[]>>({});
  const isMobile = useIsMobile();

  // Initialize columns with applications based on their status;
  useEffect(() => {;
    if (applications) {;
      // Group applications by status;
      const groupedApplications = COLUMNS.reduce(;
        (acc, column) => {;
          acc[column.id] = applications.filter(;
            (app) => app.status === column.id,;
          );
          return acc;
        },;
        {} as Record<string, JobApplication[]>,;
      );

      setColumns(groupedApplications);
    };
  }, [applications]);
<<<<<<< HEAD
;''
  // Handle drag end event to update the application status;
  const handleDragEnd: unknown = async (_result: DropResult) => {;
    const { destination, source, draggableId } = result;''
;;
    // If there's no destination or the item is dropped in the same place, do nothing;'
=======
'
  // Handle drag end event to update the application status'
  const handleDragEnd = async (_result: DropResult) => {;
    const { destination, source, draggableId } = result'
'
    // If there's no destination or the item is dropped in the same place, do nothing'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    if (;
      !destination ||;
      (destination.droppableId === source.droppableId &&;
        destination.index === source.index);
    ) {;
      return;
    };

    // Get the application that was dragged;
    const application = applications.find((app) => app.id === draggableId);
    if (!application) return;

    // Update the application status in the database;
    const newStatus = destination.droppableId as ApplicationStatus;

    // Optimistically update the UI;
<<<<<<< HEAD
    const sourceColumn: unknown = [...(columns[source.droppableId] || [])];''
    const destColumn: unknown = [...(columns[destination.droppableId] || [])];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, {;''
      ...removed,;;
      status: "newStatus",;"
=======
    const sourceColumn = [...(columns[source.droppableId] || [])]'
    const destColumn = [...(columns[destination.droppableId] || [])]'
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, {'
      ...removed,'
      status: newStatus,"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    } as JobApplication);

    setColumns({;
      ...columns,;
      [source.droppableId]: sourceColumn,;
      [destination.droppableId]: destColumn,;
    });
<<<<<<< HEAD
;""
    // Update status in the database;";""
    try {;";";""
      await updateApplicationStatus(draggableId, newStatus);";";";""
      toast({;";";";";""
        title: 'Status updated',;;'
        description: "`Candidate moved to ${COLUMNS.find((col) => col.id === newStatus)?.title"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`,;""
      });";""
    } catch {;";";""
      // Revert the UI changes if the database update fails;";";";""
      toast({;";";";";""
        title: 'Failed to update status',;;'
        description: 'Please try again',;;'
        variant: 'destructive',;'
=======
"
    // Update status in the database;
    try {;"";
      await updateApplicationStatus(draggableId, newStatus);"";
      toast({;"";
        title: 'Status updated','
        description: "`Candidate moved to ${COLUMNS.find((col) => col.id === newStatus)?.title"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`,
      });"
    } catch {;";
      // Revert the UI changes if the database update fails";";
      toast({"
        title: 'Failed to update status','
        description: 'Please try again','
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
    };
  };

  // Synchronous wrapper for DragDropContext with correct type;
  const handleDragEndSync = (..._args: unknown[]) => {;
    // The first argument should be DropResult;
    const [result] = args;
    void handleDragEnd(result as DropResult);
<<<<<<< HEAD
  };''
;
  if (isLoading) {;
    return (;''
      <div;;
        className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`};''
      >;;
        {Array.from({ length: "isMobile ? 1 : 5 "}).map((_, i) => (;";";";";""
          <Card key={i} className="h-[500px]">;";";";""
            <CardHeader>;";";";";""
              <Skeleton className="h-8 w-24" />;";";""
            </CardHeader>;";";";""
            <CardContent>;";";";";""
              <Skeleton className="h-[400px] w-full" />;"
            </CardContent>;
          </Card>;
        ))};
      </div>;
    );""
  };";""
;";";""
  if (!applications || applications.length === 0) {;";";";""
    return (;";";";";""
      <Card className="text-center py-16">;";";";""
        <CardContent>;";";";";""
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>;";";";";""
          <p className="text-muted-foreground mb-6">;";";";";""
            You haven't received any applications for this job yet.;'
          </p>;
        </CardContent>;
      </Card>;
    );
  };''
;
  return (;
    <DragDropContext onDragEnd={handleDragEndSync}>;''
      <div;;
        className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`};'
=======
  }'
'
  if (isLoading) {;
    return ('
      <div'`
        className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}'
      >'
        {Array.from({ length: "isMobile ? 1 : 5 }).map((_, i) => (;"";
          <Card key={i} className="h-[500px]">;"
            <CardHeader>;";"
              <Skeleton className=h-8 w-24" />";
            </CardHeader>;"";
            <CardContent>;""
              <Skeleton className="h-[400px] w-full />
            </CardContent>;
          </Card>))};
      </div>;"
    )"
  };"
;";"
  if (!applications || applications.length === 0) {;";"
    return (;";"
      <Card className=text-center py-16">"
        <CardContent>";""
          <h3 className=text-lg font-semibold mb-2>No applications yet</h3>"
          <p className="text-muted-foreground mb-6>;"""
            You haven't received any applications for this job yet.'
          </p>;
        </CardContent>;
      </Card>);
  }'
'
  return (;
    <DragDropContext onDragEnd={handleDragEndSync}>'
      <div'`
        className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`};
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      >;
        {COLUMNS.map((column) => (;
          <KanbanColumn;
            key={column.id};
            id={column.id};
            title={column.title};
            description={column.description};
            applications={columns[column.id] || []};
            count={columns[column.id]?.length || 0};
<<<<<<< HEAD
          />;
        ))};
      </div>;''
    </DragDropContext>;
  );
};
;
};''
}
}''
}''
=======
          />))};
      </div>'
    </DragDropContext>'
  );
};

}'

}'
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
