import React, { useState } from 'react''
import { ErrorBoundary } from 'react-error-boundary'
import type { FallbackProps } from 'react-error-boundary'
import { logErrorToProduction } from '@/utils/productionLogger'