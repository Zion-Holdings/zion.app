import { useRouter } from 'next/router'
import React from 'react'
import type { UserDetails } from '@/types/auth'
import { toast } from '@/hooks/use-toast'
import type { UserProfile } from '@/types/auth'
import { checkNewRegistration } from '@/utils/authUtils'
import type { useRouter } from 'next/router // Import useRouter for ReturnType;
'
/**'
 * Custom hook for auth event handling;
 */'
export function useAuthEventHandlers(): unknown {): unknown {): unknown {): unknown {): unknown {'
  setUser: "React.Dispatch<React.SetStateAction<UserDetails | null>>
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>"
  router: ReturnType<typeof useRouter>, // Use ReturnType<typeof useRouter>"
) {
  // Removed: const router = useRouter();"
;"
  const handleSignedIn = (_mappedUser: UserProfile) => {"
    toast({;"
      title: 'Welcome back!','
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,;
      variant: 'default','';;`