import React from 'react;
import { RefreshCcw, AlertCircle } from '@/components/ui/icons'
import { ErrorBoundary } from 'react-error-boundary'
import type { FallbackProps } from 'react-error-boundary'
import { mutate } from 'swr'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { logErrorToProduction } from '@/utils/productionLogger'';;