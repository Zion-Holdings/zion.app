
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { showApiError } from "@/utils/apiErrorHandler";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils";
import { cleanupAuthState } from "@/utils/authUtils";

export function useAuthOperations(
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Check for referral code in URL when the hook is first used
  useEffect(() => {
    checkUrlForReferralCode();
  }, []);

  const login = async ({ email, password }: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
        return { data: null, error: error.message };
      }

      toast({
        title: "Login successful!",
        description: `Welcome back, ${email}!`,
      });

      return { data, error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to sign in. Please check your credentials.",
      });
      return { data: null, error: "Failed to sign in." };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async ({ email, password, display_name }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: display_name,
          },
        },
      });

      if (error) {
        showApiError(error, "Error during signup");
        return { data: null, error: error.message };
      }

      // Add this after successful signup
      if (data?.user) {
        // Track referral if there was a referral code
        await trackReferral(data.user.id, email);
      }

      toast({
        title: "Signup successful!",
        description: `Welcome, ${display_name}! Please check your email to verify your account.`,
      });

      return { data, error: null };
    } catch (error) {
      showApiError(error, "Failed to sign up. Please try again.");
      return { data: null, error: "Failed to sign up." };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
      } else {
        setUser(null); // Clear the user state upon successful logout
        toast({
          title: "Logout successful!",
          description: "You have been successfully logged out.",
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "There was an issue logging you out. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
        return { data: null, error: error.message };
      }

      toast({
        title: "Password reset email sent!",
        description: `Please check your email (${email}) for instructions on how to reset your password.`,
      });

      return { data, error: null };
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to send reset password email. Please try again.",
      });
      return { data: null, error: "Failed to send reset password email." };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData: Partial<UserProfile>) => {
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
        toast({
          variant: "destructive",
          title: "Failed to update profile",
          description: error.message,
        });
        return { error: error.message };
      }

      // Optimistically update the local user state
      setUser((prevUser) => {
        if (prevUser) {
          return { ...prevUser, ...profileData };
        }
        return prevUser;
      });

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated.",
      });

      return { error: null };
    } catch (error) {
      console.error("Profile update failed:", error);
      toast({
        variant: "destructive",
        title: "Profile update failed",
        description: "There was an issue updating your profile. Please try again.",
      });
      return { error: "Failed to update profile." };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithTwitter = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitter",
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Oh no! Something went wrong.",
          description: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithWeb3 = async () => {
    setIsLoading(true);
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        throw new Error("Web3 wallet not found");
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      
      // Fix: Create a proper UserProfile object
      setUser({
        id: address,
        displayName: address,
        profileComplete: true,
        email: '', // Add required fields
        userType: 'talent', // Default user type
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as UserProfile);
      
      toast({ title: 'Wallet connected', description: address });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Web3 login failed',
        description: error?.message || 'Unable to connect wallet'
      });
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
