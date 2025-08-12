import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ModerationLog } from '@/types/moderation';

interface Props {
  logs: ModerationLog[];
  isLoading: boolean;
  onAction: (id: string, action: 'approved' | 'rejected') => void;
}

export function FlaggedListingsTable({ logs, isLoading, onAction }: Props) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-purple"></div>
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-muted-foreground">No flagged listings</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.listing_id}</TableCell>
            <TableCell>{log.listing_type}</TableCell>
            <TableCell>{log.status}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button size="sm" onClick={() => onAction(log.id, 'approved')}>Approve</Button>
              <Button size="sm" variant="destructive" onClick={() => onAction(log.id, 'rejected')}>
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
