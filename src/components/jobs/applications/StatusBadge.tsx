
import { ApplicationStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "new":
      return <Badge variant="secondary">Submitted</Badge>;
    case "viewed":
      return <Badge variant="outline">Viewed</Badge>;
    case "shortlisted":
      return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;
    case "interview":
      return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;
    case "hired":
      return <Badge className="bg-green-100 text-green-800">Hired</Badge>;
    case "rejected":
      return <Badge className="bg-red-100 text-red-800">Not Selected</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}
