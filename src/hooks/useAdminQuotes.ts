import { useState } from 'react''
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import  { quoteRequestService }  from '@/services/quoteRequestService;
import type {;
  QuoteRequest as _QuoteRequest,'
  QuoteStatus,'
} from '@/types/quotes'
import { useToast } from '@/components/ui/use-toast'
import type { DateRange } from 'react-day-picker'
'
export const _useAdminQuotes = () => {;
  const { _toast } = useToast()'
  const queryClient = useQueryClient()'
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all')'
  const [archiveFilter, setArchiveFilter] = useState<'
    'active' | 'archived' | 'all'
  >('active')'
  const [searchQuery, setSearchQuery] = useState('')'
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)'
  // Fetch all quote requests'
  const {'
    data: allQuotes = [],;"
    isLoading,
    error,;
  } = useQuery({"
    queryKey: ['quotes', 'admin'],'
    queryFn: "() => quoteRequestService.getAll()
    enabled: true,
  })"
;"
  // Filter quotes based on selected filters;
  const filteredQuotes = allQuotes.filter((quote) => {"
    // Status filter;"
    if (statusFilter !== 'all' && quote.status !== statusFilter) {'
      return false'
    };
'
    // Archive filter'
    if (archiveFilter === 'active' && quote.is_archived) {'
      return false'
    }'
    if (archiveFilter === 'archived' && !quote.is_archived) {'
      return false;
    };';;