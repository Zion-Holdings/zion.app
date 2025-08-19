
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useJobApplications } from "@/hooks/useJobApplications";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { KanbanColumn } from "./KanbanColumn";
import { useIsMobile } from "@/hooks/use-mobile";

// Define the kanban board columns based on application statuses
const COLUMNS = [
  {
    id: "new",
    title: "Applied",
    description: "New applications",
  },
  {
    id: "shortlisted",
    title: "Shortlisted",
    description: "Candidates selected for review",
  },
  {
    id: "interview",
    title: "Interview",
    description: "Scheduled for interview",
  },
  {
    id: "hired",
    title: "Hired",
    description: "Successful candidates",
  },
  {
    id: "rejected",
    title: "Rejected",
    description: "Not moving forward",
  },
];

interface KanbanBoardProps {
  jobId?: string;
}

export function KanbanBoard({ jobId }: KanbanBoardProps) {
  const { applications, isLoading, updateApplicationStatus } = useJobApplications(jobId);
  const [columns, setColumns] = useState<Record<string, JobApplication[]>>({});
  const isMobile = useIsMobile();
  
  // Initialize columns with applications based on their status
  useEffect(() => {
    if (applications) {
      // Group applications by status
      const groupedApplications = COLUMNS.reduce((acc, column) => {
        acc[column.id] = applications.filter(app => app.status === column.id);
        return acc;
      }, {} as Record<string, JobApplication[]>);
      
      setColumns(groupedApplications);
    }
  }, [applications]);
  
  // Handle drag end event to update the application status
  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    
    // If there's no destination or the item is dropped in the same place, do nothing
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return;
    }
    
    // Get the application that was dragged
    const application = applications.find(app => app.id === draggableId);
    if (!application) return;
    
    // Update the application status in the database
    const newStatus = destination.droppableId as ApplicationStatus;
    
    // Optimistically update the UI
    const sourceColumn = [...columns[source.droppableId]];
    const destColumn = [...columns[destination.droppableId]];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, { ...removed, status: newStatus });
    
    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
    
    // Update status in the database
    try {
      await updateApplicationStatus(draggableId, newStatus);
      toast({
        title: "Status updated",
        description: `Candidate moved to ${COLUMNS.find(col => col.id === newStatus)?.title}`,
      });
    } catch (error) {
      // Revert the UI changes if the database update fails
      toast({
        title: "Failed to update status",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };
  
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 ${!isMobile ? 'md:grid-cols-3 lg:grid-cols-5' : ''} gap-4`}>
        {Array.from({ length: isMobile ? 1 : 5 }).map((_, i) => (
          <Card key={i} className="h-[500px]">
            <CardHeader>
              <Skeleton className="h-8 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[400px] w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (!applications || applications.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
          <p className="text-muted-foreground mb-6">
            You haven't received any applications for this job yet.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-6' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'} overflow-x-auto`}>
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            description={column.description}
            applications={columns[column.id] || []}
            count={columns[column.id]?.length || 0}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
