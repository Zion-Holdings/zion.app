import { format } from "date-fns";
import { JobApplication } from "@/types/jobs";
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar"; // Renamed
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { Briefcase, User } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ApplicationActions } from "./ApplicationActions";
import { StatusBadge } from "./StatusBadge";


import { HireConfirmationModal } from "@/components/hiring-tracker/HireConfirmationModal";
import React, { useState } from "react"; // Import React and useState
import { toast } from "@/hooks/use-toast";
import Image from 'next/image'; // Import next/image

interface ApplicationsTableProps {
  applications: JobApplication[];
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: string) => Promise<void>;
  onViewScore: (application: JobApplication) => void;
}

// Sub-component for avatar to handle its own error state
const ApplicationAvatar = ({ application }: { application: JobApplication }) => {
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Candidate";

  return (
    <AvatarPrimitive className="h-8 w-8"> {/* Using Renamed AvatarPrimitive */}
      {application.talent_profile?.profile_picture_url && !avatarError ? (
        <Image
          src={application.talent_profile.profile_picture_url}
          alt={talentName}
          width={32} // for h-8 w-8
          height={32} // for h-8 w-8
          className="rounded-full object-cover"
          onError={() => setAvatarError(true)}
          priority={false}
        />
      ) : (
        <User className="h-4 w-4" />
      )}
    </AvatarPrimitive>
  );
};

export function ApplicationsTable({ 
  applications, 
  processingId, 
  onViewApplication, 
  onStatusChange,
  onViewScore
}: ApplicationsTableProps) {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  
  const handleHireClick = (application: JobApplication) => {
    setSelectedApplication(application);
    setHireModalOpen(true);
  };
  
  const handleHireConfirmed = () => {
    toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    });
  };
  
  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead className="hidden md:table-cell">Applied</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden lg:table-cell">Match Score</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <ApplicationAvatar application={application} /> {/* Use sub-component */}
                    <div>
                      <div className="font-medium">
                        {application.talent_profile?.full_name || "Candidate"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {application.talent_profile?.professional_title || "Applicant"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(new Date(application.created_at), "PP")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <StatusBadge status={application.status} />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {application.match_score !== undefined && application.match_score !== null ? (
                    <ClickableBadge 
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => onViewScore(application)}
                    >
                      {application.match_score}%
                    </ClickableBadge>
                  ) : (
                    <span className="text-muted-foreground text-sm">Not scored</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <ClickableBadge 
                      variant="outline" 
                      className="cursor-pointer bg-green-50 hover:bg-green-100 text-green-700"
                      onClick={() => handleHireClick(application)}
                    >
                      <Briefcase className="h-3 w-3 mr-1" /> Hire
                    </ClickableBadge>
                    <ApplicationActions
                      application={application}
                      processingId={processingId}
                      onViewApplication={onViewApplication}
                      onStatusChange={onStatusChange}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <HireConfirmationModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        application={selectedApplication || undefined}
        onConfirm={handleHireConfirmed}
      />
    </>
  );
}
