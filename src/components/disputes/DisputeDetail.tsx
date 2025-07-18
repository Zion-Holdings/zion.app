

import { logErrorToProduction } from '@/utils/productionLogger;'';
import type {;''';
  DisputeStatus,;''';
} from '';
import { disputeReasonLabels } from '@/types/disputes;'';

  CardContent,;''';
  CardHeader,;''';
} from '';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert;'';

import { toast } from 'sonner;'';

  } = useDisputes();''';
  const [messages, setMessages] = useState<DisputeMessage[]>([]);''';
  const [message, setMessage] = useState('');;'';
  const [adminNote, setAdminNote] = useState('');'';
  const [isSending, setIsSending] = useState(false);''';
        logErrorToProduction('Error loading dispute data:'';
        logErrorToProduction('Error loading dispute data:'';
      logErrorToProduction('Error sending message:'';
      logErrorToProduction('Error sending message:'';
        return '';
                            "MMM d, yyyy 'at'';
                              "MMM d, yyyy 'at'';
        return '';
                            MMM d, yyyy 'at''