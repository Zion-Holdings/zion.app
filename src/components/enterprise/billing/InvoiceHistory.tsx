

import { Download, FileText, Search } from '@/components/ui/icons;'';
  TableBody,;''';
  TableHeader,;''';
} from '';

import { Badge } from '@/components/ui/badge;'';

import { toast } from '@/hooks/use-toast;'';
  const invoices: unknown = [;''';
      id: 'INV-1234',;;'';
      date: 'May 1, 2025',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'May 2025',;'';
    },;''';
      id: 'INV-1233',;;'';
      date: 'Apr 1, 2025',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'Apr 2025',;'';
    },;''';
      id: 'INV-1232',;;'';
      date: 'Mar 1, 2025',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'Mar 2025',;'';
    },;''';
      id: 'INV-1231',;;'';
      date: 'Feb 1, 2025',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'Feb 2025',;'';
    },;''';
      id: 'INV-1230',;;'';
      date: 'Jan 1, 2025',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'Jan 2025',;'';
    },;''';
      id: 'INV-1229',;;'';
      date: 'Dec 1, 2024',;;'';
      amount: '$1,999.00',;;'';
      status: 'paid',;;'';
      period: 'Dec 2024',;'';
  ];''';
    // In a real app, this would trigger a download of the invoice PDF;''';
      title: 'Downloading invoice',;;''