import { useState, useEffect } from "react";
import { mutate } from 'swr';
import { supabase } from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { showApiError } from "@/utils/apiErrorHandler";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";

// Define Props and Return Types FIRST
export interface SignupProps {
  email: string;
  password: string;
  display_name: string;
}

export interface AuthOperations {
  login: ({ email, password }: { email: string; password: string }) => Promise<{ data: any; error: string | null }>;
  signup: (props: SignupProps) => Promise<{ data: any; error: string | null }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ data: any; error: string | null }>;
  updateProfile: (profileData: Partial<UserProfile>) => Promise<{ error: string | null }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
}

// THEN define the hook
export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAvatarUrl: React.Dispatch<React.SetStateAction<string | null>>
): AuthOperations {
  useEffect(() => {
    checkUrlForReferralCode();
  }, []);

  const login = async ({ email, password }: { email: string; password: string }): Promise<{ data: any; error: string | null }> => {
    setIsLoading(true);
    try {
      cleanupAuthState();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
        return { data: null, error: error.message };
      }
      toast({ title: "Login successful!", description: `Welcome back, ${email}!` });
      return { data, error: null };
    } catch (error: any) {
      toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message || "Failed to sign in. Please check your credentials." });
      return { data: null, error: error.message || "Failed to sign in." };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async ({ email, password, display_name }: SignupProps): Promise<{ data: any; error: string | null }> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name } },
      });
      if (error) {
        showApiError(error, "Error during signup");
        return { data: null, error: error.message };
      }
      if (data?.user) {
        await trackReferral(data.user.id, email);
        try {
          await fetch('/api/points/increment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: data.user.id, amount: 10, reason: 'signup' })
          });
        } catch (err) {
          console.error('Failed to increment signup points', err);
        }
        mutate('user');
      }
      toast({ title: "Signup successful!", description: `Welcome, ${display_name}! Please check your email to verify your account.` });
      return { data, error: null };
    } catch (error: any) {
      showApiError(error, "Failed to sign up. Please try again.");
      return { data: null, error: error.message || "Failed to sign up." };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
      } else {
        setUser(null);
        setAvatarUrl(null);
        try {
          await fetch('/api/auth/logout', { method: 'POST' });
        } catch (cookieErr) {
          console.warn('useAuthOperations.logout: failed to clear auth cookie', cookieErr);
        }
        toast({ title: "Logout successful!", description: "You have been successfully logged out." });
      }
    } catch (error: any) {
      console.error("Logout failed:", error);
      toast({ variant: "destructive", title: "Logout failed", description: error.message || "There was an issue logging you out. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string): Promise<{ data: any; error: string | null }> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });
      if (error) {
        toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
        return { data: null, error: error.message };
      }
      toast({ title: "Password reset email sent!", description: `Please check your email (${email}) for instructions on how to reset your password.` });
      return { data, error: null };
    } catch (error: any) {
      toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message || "Failed to send reset password email. Please try again." });
      return { data: null, error: error.message || "Failed to send reset password email." };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData: Partial<UserProfile>): Promise<{ error: string | null }> => {
    setIsLoading(true);
    try {
      if (!profileData || !profileData.id) {
        throw new Error("Profile data or user ID is missing.");
      }
      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: profileData.displayName,
          user_type: profileData.userType,
          profile_complete: profileData.profileComplete,
          bio: profileData.bio,
          avatar_url: profileData.avatarUrl,
          headline: profileData.headline,
        })
        .eq("id", profileData.id);
      if (error) {
        toast({ variant: "destructive", title: "Failed to update profile", description: error.message });
        return { error: error.message };
      }
      setUser((prevUser) => prevUser ? { ...prevUser, ...profileData } : prevUser);
      toast({ title: "Profile updated!", description: "Your profile has been successfully updated." });
      return { error: null };
    } catch (error: any) {
      console.error("Profile update failed:", error);
      toast({ variant: "destructive", title: "Profile update failed", description: error.message || "There was an issue updating your profile. Please try again." });
      return { error: error.message || "Failed to update profile." };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
      if (error) toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
    } catch (error: any) {
       toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message || "Google login failed."});
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: "facebook" });
      if (error) toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
    } catch (error: any) {
       toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message || "Facebook login failed."});
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithTwitter = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: "twitter" });
      if (error) toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message });
    } catch (error: any) {
       toast({ variant: "destructive", title: "Oh no! Something went wrong.", description: error.message || "Twitter login failed."});
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithWeb3 = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) throw new Error("Web3 wallet not found");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({ method: 'personal_sign', params: [address, address] });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        email: '',
        userType: 'talent',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as UserProfile);
      toast({ title: 'Wallet connected', description: address });
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Web3 login failed', description: error?.message || 'Unable to connect wallet' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
  };
}
