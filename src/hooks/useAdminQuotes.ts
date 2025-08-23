import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { quoteRequestService } from '@/services/quoteRequestService';
import type { QuoteRequest, QuoteStatus } from '@/types/quotes';
import { useToast } from '@/components/ui/use-toast';
import type { DateRange } from 'react-day-picker';

export const useAdminQuotes = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  // Fetch all quote requests
  const { data: allQuotes = [], isLoading, error } = useQuery({
    queryKey: ['quotes', 'admin'],
    queryFn: () => quoteRequestService.getAll(),
    enabled: true,
  });

  // Filter quotes based on selected filters
  const filteredQuotes = allQuotes.filter((quote) => {
    // Status filter
    if (statusFilter !== 'all' && quote.status !== statusFilter) {
      return false;
    }
    
    // Archive filter
    if (archiveFilter === 'active' && quote.is_archived) {
      return false;
    }
    if (archiveFilter === 'archived' && !quote.is_archived) {
      return false;
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !quote.requester_name.toLowerCase().includes(query) &&
        !quote.project_name.toLowerCase().includes(query) &&
        !quote.project_summary.toLowerCase().includes(query) &&
        !(quote.talent_name && quote.talent_name.toLowerCase().includes(query))
      ) {
        return false;
      }
    }
    
    // Date range filter
    if (dateRange?.from) {
      const createdAt = new Date(quote.created_at);
      if (createdAt < dateRange.from) {
        return false;
      }
    }
    
    if (dateRange?.to) {
      const createdAt = new Date(quote.created_at);
      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999); // End of day
      if (createdAt > endDate) {
        return false;
      }
    }
    
    return true;
  });

  // Update quote status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: QuoteStatus }) => 
      quoteRequestService.updateStatus(id, status),
    onSuccess: () => {
      toast({
        title: "Status updated",
        description: "The quote request status has been updated"
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update status: " + error.message,
        variant: "destructive"
      });
    }
  });

  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({
    mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) => 
      quoteRequestService.toggleArchive(id, isArchived),
    onSuccess: (_, variables) => {
      toast({
        title: variables.isArchived ? "Quote archived" : "Quote unarchived",
        description: variables.isArchived 
          ? "The quote request has been archived" 
          : "The quote request has been moved back to active quotes"
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to update quote: " + error.message,
        variant: "destructive"
      });
    }
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => quoteRequestService.delete(id),
    onSuccess: () => {
      toast({
        title: "Quote deleted",
        description: "The quote request has been permanently deleted"
      });
      queryClient.invalidateQueries({ queryKey: ['quotes', 'admin'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to delete quote: " + error.message,
        variant: "destructive"
      });
    }
  });

  return {
    quotes: filteredQuotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
    updateStatus: (id: string, status: QuoteStatus) => 
      updateStatusMutation.mutate({ id, status }),
    toggleArchive: (id: string, isArchived: boolean) => 
      toggleArchiveMutation.mutate({ id, isArchived }),
    deleteQuote: (id: string) => deleteMutation.mutate(id),
  };
};