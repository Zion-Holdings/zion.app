<<<<<<< HEAD;

import { ShieldAlert } from '@/components/ui/icons;'';
  TooltipContent,;''';
} from '@/components/ui/tooltip;'';
;''';
  status: 'open' | 'under_review' | 'resolved' | 'closed;'';
  let variant: 'default' | 'destructive' | 'secondary' | 'outline' =;;'';
    'destructive;''';
  let message = 'This item has an open dispute;'';
;''';
    case 'under_review':;;'';
      variant = 'secondary;''';
      message = 'This dispute is under review by our team;'';
    case 'resolved':;;'';
      variant = 'outline;''';
      message = 'This dispute has been resolved;'';
    case 'closed':;;'';
      variant = 'outline;''';
      message = 'This dispute has been closed;'';
  };''';
    <Tooltip>;'''