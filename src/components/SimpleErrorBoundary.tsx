import React from 'react'
import { logError } from '@/utils/logError'
'
interface ErrorBoundaryState {'
  hasError: "boolean,"
  error: "Error | undefined"
}"
";
interface ErrorBoundaryProps {;"";
  children: React.ReactNode;""
  fallback?: React.ComponentType<{ error?: Error; retry: "() => void }>