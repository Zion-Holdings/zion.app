import React, { useEffect }  from 'react;
import {;
  supabase,'
  isSupabaseConfigured,'
} from '../../integrations/supabase/client'
import { useAuthOperations } from '../../hooks/useAuthOperations'
import { AuthContext } from './AuthContext'
import { cleanupAuthState } from '../../utils/authUtils'
import { useRouter } from 'next/router // Changed from react-router-dom;
import { useAuthState } from './useAuthState'
import { useAuthEventHandlers } from './useAuthEventHandlers'
import { mapProfileToUser } from './profileMapper'
import { safeStorage } from '@/utils/safeStorage'
import type { UserDetails, AuthContextType } from '@/types/auth'
import { toast } from '@/hooks/use-toast // Import toast;
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import logger from '@/utils/logger'
import {'
  logInfo,
  logDebug,'
  logErrorToProduction,'
} from '@/utils/productionLogger'
export const AuthProvider: ({ children "}: { children: React.ReactNode }) => {'';;