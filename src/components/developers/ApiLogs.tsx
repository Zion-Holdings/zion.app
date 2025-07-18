

import { format } from 'date-fns;'';
import { useApiKeys } from '@/hooks/useApiKeys;'';

  Card,;''';
  CardHeader,;''';
} from '';
  Select,;''';
  SelectTrigger,;''';
} from '';

import { DynamicApiLogsChart as ApiLogsChart } from '@/utils/dynamicComponents;'';

    fetchApiLogs(pageSize, currentPage * pageSize);''';
  // Helper to format the timestamp;''';
    return format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');'';
  };''';
  const getStatusBadge: unknown = (_statusCode: number) => {;'''