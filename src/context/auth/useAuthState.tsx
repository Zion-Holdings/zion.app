
import React, { useState } from "react";
import type { UserProfile } from "@/types/auth";

/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
  const [user, setUser] = useState<UserProfile | null | false>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
  const [tokens, setTokens] = useState<{ accessToken: string; refreshToken?: string } | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep,
    tokens,
    setTokens,
    avatarUrl,
    setAvatarUrl
  };
}
