
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample data for integration sync logs
const syncLogs = [
  {
    id: "1",
    integration: "Salesforce",
    event: "contact_synced",
    status: "success",
    timestamp: "2024-05-20T12:30:45Z",
    details: "Successfully synced contact data for Job #1234"
  },
  {
    id: "2",
    integration: "Greenhouse",
    event: "applicant_created",
    status: "success", 
    timestamp: "2024-05-20T10:15:22Z",
    details: "New applicant created in Greenhouse from Zion application"
  },
  {
    id: "3",
    integration: "HubSpot",
    event: "deal_updated",
    status: "error",
    timestamp: "2024-05-19T16:45:12Z",
    details: "Failed to update deal - API rate limit exceeded"
  },
  {
    id: "4",
    integration: "Zoho CRM",
    event: "job_synced",
    status: "warning",
    timestamp: "2024-05-19T14:22:33Z",
    details: "Job synced but some fields were skipped due to mapping issues"
  },
  {
    id: "5",
    integration: "Lever",
    event: "candidate_status_changed",
    status: "success",
    timestamp: "2024-05-18T09:10:05Z",
    details: "Updated candidate status to 'Interview Scheduled'"
  }
];

export function IntegrationsSyncLog() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-green-500">Success</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  return (
    <Card>
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Integration</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="hidden md:table-cell">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.integration}</TableCell>
                <TableCell>
                  {log.event.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </TableCell>
                <TableCell>{getStatusBadge(log.status)}</TableCell>
                <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
