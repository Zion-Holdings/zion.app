import { formatDistanceToNow } from "date-fns";
import { Calendar, User, FileText, BarChart } from 'lucide-react';




import { Button } from "@/components/ui/button";
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar"; // Renamed to avoid conflict
import { TableRow, TableCell } from "@/components/ui/table";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
import { StatusBadge } from "./StatusBadge";
import { ScoreBadge } from "./ScoreBadge";
import { ApplicationActions } from "./ApplicationActions";
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import useState

interface ApplicationRowProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (application: JobApplication) => void;
}

export function ApplicationRow({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
  onViewScore
}: ApplicationRowProps) {
  const [avatarError, setAvatarError] = useState(false);
  const talentName = application.talent_profile?.full_name || "Unknown";

  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {/* Using renamed AvatarPrimitive */}
            {application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url} 
                alt={talentName}
                width={36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={() => setAvatarError(true)}
                priority={false}
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </AvatarPrimitive>
          <div>
            <div className="font-medium">
              {talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {application.talent_profile?.professional_title || "Talent"}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={application} />
        </Button>
      </TableCell>
      <TableCell>
        {application.resume ? (
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </a>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
          application={application}
          processingId={processingId}
          onViewApplication={onViewApplication}
          onStatusChange={onStatusChange}
        />
      </TableCell>
    </TableRow>
  );
}
