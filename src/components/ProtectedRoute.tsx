import React, { useEffect } from 'react;
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant'
import { useWhitelabel } from '@/context/WhitelabelContext'
import { toast } from '@/hooks/use-toast'
'
export interface ProtectedRouteProps {'
  children: React.ReactNode
  adminOnly?: boolean'
  tenantAdminAllowed?: boolean'
  requiredUserType?: 'creator' | 'jobSeeker' | 'employer' | 'buyer' | 'admin'
}';;