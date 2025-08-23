
import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DisputeStatusBadgeProps {
  status: 'open' | 'under_review' | 'resolved' | 'closed';
}

export function DisputeStatusBadge({ status }: DisputeStatusBadgeProps) {
  let variant: "default" | "destructive" | "secondary" | "outline" = "destructive";
  let message = "This item has an open dispute";
  
  switch (status) {
    case 'under_review':
      variant = "secondary";
      message = "This dispute is under review by our team";
      break;
    case 'resolved':
      variant = "outline";
      message = "This dispute has been resolved";
      break;
    case 'closed':
      variant = "outline";
      message = "This dispute has been closed";
      break;
    default:
      break;
  }
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant={variant} className="flex items-center gap-1">
          <ShieldAlert className="h-3 w-3" />
          <span>Under Dispute</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
}
