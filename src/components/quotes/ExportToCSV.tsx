<<<<<<< HEAD;

import { Download } from '@/components/ui/icons;'';
import type { QuoteRequest } from '@/types/quotes;'';
  filename?: string;''';
export const ExportToCSV: unknown = ({;''';
  filename = 'quote-requests',;''';
    // Define CSV Headers;''';
      'ID',;;'';
      'Talent Name',;;'';
      'Requester Name',;;'';
      'Requester Email',;;'';
      'Project Name',;;'';
      'Project Summary',;;'';
      'Budget',;;'';
      'Timeline',;;'';
      'Status',;;'';
      'Created Date',;'';
    ];''';
    const rows: unknown = quotes.map((quote) => [;''';
      quote.talent_name || 'Unknown',;'';

      quote.budget_display ||;''';
          : quote.budget_min;''';
            : 'Not specified'),;'';
      new Date(quote.created_at).toLocaleDateString(),;''';
    // Create CSV content;''';
      headers.join(','),;''';
          .map((cell) =>;''';
            typeof cell === 'string' &&;;'';
            (cell.includes(',') || cell.includes('';
              ? `"${cell.replace(/"/g, '""'';
            (cell.includes(',') || cell.includes('';
              ? `${cell.replace(//g, ''