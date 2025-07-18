import { toast } from '@/hooks/use-toast'
import { logErrorToProduction } from '@/utils/productionLogger'
import { isPublicRoute } from '../config/publicRoutes'
import { logDebug } from '@/utils/productionLogger;
if (typeof window !== 'undefined' && window.fetch) {'
  const originalFetch = window.fetch.bind(window);
  let lastMessage = 
  let lastTime = 0;
  // URLs that should not trigger user-facing error toasts (background/polling requests)'
  const SILENT_ERROR_PATTERNS = [;
    '/_next/',;
    '/api/auth/session',;
    '/api/health',;
    '/api/status',;
    '/api/heartbeat',;
    '/api/ping',;
    '/analytics',;
    '/metrics',;
    '/telemetry',;
    'supabase.co', // Supabase internal calls;
    'googleapis.com', // Google API calls;
    'github.com/api', // GitHub API calls;';;