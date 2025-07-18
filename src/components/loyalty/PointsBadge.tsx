

import { RefreshCw } from '@/components/ui/icons;'';

import {;''';
  TooltipProvider,;''';
} from '';

import { logErrorToProduction } from '@/utils/productionLogger;'';

;''';
  const breakdown: unknown = ledger.reduce(;''';
      if (e.reason === 'purchase') acc.purchase += e.delta;;'';
      if (e.reason === 'post') acc.post += e.delta;;'';
      if (e.reason === 'referral') acc.referral += e.delta;'';
      return acc;''';
      logErrorToProduction('Failed to refresh points:'';
      logErrorToProduction('Failed to refresh points:''