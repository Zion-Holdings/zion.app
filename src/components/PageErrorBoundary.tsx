import React from 'react'
import {'
  AlertTriangle,'
  Home,
  RefreshCw,'
  Settings,'
} from '@/components/ui/icons'
import Link from 'next/link'
import { ErrorBoundary } from 'react-error-boundary'
import type { FallbackProps } from 'react-error-boundary'

import { logErrorToProduction } from '@/utils/productionLogger'
import {
  logInfo,'
  logErrorToProduction as prodLogError,'
} from '@/utils/productionLogger'