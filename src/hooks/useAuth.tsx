import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth";
import { subscribeToPush } from "@/utils/pushSubscription";

// Define types for our context
export interface UserDetails {
  id?: string;
  name?: string;
  email?: string;
  userType?: string;
  displayName?: string;
  avatarUrl?: string;
  headline?: string;
  profileComplete?: boolean;
  role?: string;
  permissions?: string[];
  companyId?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  // Aliases for compatibility with other components
  login: (email: string, password: string) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (data: Partial<UserDetails>) => Promise<{ error: any }>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  setUser?: (user: UserDetails | null) => void;
}

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        if (currentUser) {
          // Fetch profile from your backend
          try {
            const response = await fetch("/api/users/me"); // Adjust API endpoint as needed
            if (!response.ok) {
              // If the /api/users/me endpoint returns 401, it means the user is not authenticated
              // or the session is invalid on the backend. In this case, we should clear the local user state.
              if (response.status === 401) {
                console.warn("User profile fetch returned 401, signing out locally.");
                await supabase.auth.signOut(); // Clear supabase session too if backend says unauth
                setUser(null);
                setIsLoading(false);
                return;
              }
              throw new Error(`Failed to fetch user profile: ${response.statusText}`);
            }
            const profile = await response.json();

            // Merge Supabase user data with Prisma profile
            const mergedUser: UserDetails = {
              id: currentUser.id,
              email: currentUser.email,
              // Prefer backend profile data for common fields if they exist
              displayName: profile.displayName || currentUser.user_metadata?.full_name,
              avatarUrl: profile.avatarUrl || currentUser.user_metadata?.avatar_url,
              ...profile, // Data from your Prisma backend (takes precedence for overlapping fields not specified above)
            };
            setUser(mergedUser);

            if (mergedUser.profileComplete) {
              await subscribeToPush();
            }

          } catch (error) {
            console.error("Error fetching user profile:", error);
            // If fetching profile fails, sign out the user to ensure consistent state
            // This prevents a situation where Supabase has a session but the app can't get user details
            await supabase.auth.signOut();
            setUser(null);
          }
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

    // Check initial session state on mount
    const checkSession = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Error getting session:", sessionError);
        setUser(null);
        setIsLoading(false);
        return;
      }

      if (session) {
        const currentUser = session.user;
         try {
          const response = await fetch("/api/users/me");
          if (!response.ok) {
            if (response.status === 401) {
              // Backend considers user unauthenticated, so clear local session
              // This can happen if the JWT is valid but the user doesn't exist in DB or other reasons
              await supabase.auth.signOut();
              setUser(null);
            } else {
              throw new Error(`Failed to fetch user profile on initial load: ${response.statusText}`);
            }
          } else {
            const profile = await response.json();
            const mergedUser: UserDetails = {
              id: currentUser.id,
              email: currentUser.email,
              displayName: profile.displayName || currentUser.user_metadata?.full_name,
              avatarUrl: profile.avatarUrl || currentUser.user_metadata?.avatar_url,
              ...profile,
            };
            setUser(mergedUser);
            if (mergedUser.profileComplete) {
              await subscribeToPush();
            }
          }
        } catch (error) {
          console.error("Error fetching user profile on initial load:", error);
          // Fallback: sign out if profile can't be fetched to avoid inconsistent state
          await supabase.auth.signOut();
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    checkSession();

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // User state and profile fetching will be handled by onAuthStateChange listener
      // No need to call setIsLoading(false) here as onAuthStateChange will do it
      return { error: null };
    } catch (error: any) {
      console.error("Sign in error:", error);
      setIsLoading(false); // Set loading to false on error
      return { error };
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null); // Explicitly set user to null
    } catch (error: any) {
      console.error("Sign out error:", error);
      // Even if signout fails, try to clear local state
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { // This data is stored in Supabase's auth.users.raw_user_meta_data
            name: userData?.name, // Make sure 'name' is what you intend for raw_user_meta_data
            user_type: userData?.userType, // Changed to snake_case as is common for metadata
            // Any other initial data for Supabase user_metadata
          },
          // emailRedirectTo: `${window.location.origin}/auth/welcome`, // Optional: for email confirmation
        },
      });
      if (error) throw error;

      // After successful Supabase signUp, you might want to create a profile in your own DB.
      // This is often done via a Supabase Function triggered by a new user event,
      // or by an API call from the client after signUp if email confirmation is not immediate.
      // If using Supabase Functions (recommended), this client-side call might not be needed.
      if (data.user && userData) {
        // Example: Call your API to create a user profile if not handled by triggers/functions
        // Consider what should happen if this API call fails.
        // try {
        //   await fetch('/api/users/create-profile', { // Ensure this endpoint exists
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       // You might need to pass the new user's JWT if your endpoint is protected
        //       // 'Authorization': `Bearer ${data.session?.access_token}`
        //     },
        //     body: JSON.stringify({ userId: data.user.id, ...userData })
        //   });
        // } catch (profileError) {
        //   console.error("Error creating user profile post-signup:", profileError);
        //   // Decide on error handling: sign out user? display message?
        // }
      }
      // onAuthStateChange will handle setting the user if session starts, or after email confirmation.
      // For immediate UI update for unconfirmed user, you might set parts of user data here,
      // but it's generally better to rely on onAuthStateChange for consistency.
      setIsLoading(false);
      return { error: null };
    } catch (error: any) {
      console.error("Sign up error:", error);
      setIsLoading(false);
      return { error };
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`, // Make sure this route exists
      });
      if (error) throw error;
      setIsLoading(false);
      return { error: null };
    } catch (error: any) {
      console.error("Reset password error:", error);
      setIsLoading(false);
      return { error };
    }
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    setIsLoading(true);
    if (!user || !user.id) {
      setIsLoading(false);
      return { error: { message: "User not authenticated" } };
    }
    try {
      // Optional: Update Supabase auth user metadata if needed
      // This is for data you want directly on the Supabase auth.user object (user_metadata)
      // const { data: updatedSupabaseUser, error: supabaseError } = await supabase.auth.updateUser({
      //   data: {
      //     full_name: data.displayName, // Example: mapping UserDetails.displayName to Supabase's full_name
      //     // other user_metadata fields
      //   }
      // });
      // if (supabaseError) throw supabaseError;

      // Update your backend Prisma profile via API
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // Send only the fields to be updated
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile on backend");
      }
      const updatedProfileFromBackend = await response.json();

      // Update local user state with merged data (prefer backend's source of truth)
      setUser(prevUser => ({
        ...prevUser,
        ...updatedProfileFromBackend // Backend data takes precedence
      }));
      setIsLoading(false);
      return { error: null };
    } catch (error: any) {
      console.error("Update profile error:", error);
      setIsLoading(false);
      return { error };
    }
  };

  const loginWithProvider = async (provider: 'google' | 'facebook' | 'twitter') => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, // Ensure this callback route handles the session
        },
      });
      if (error) throw error;
      // Supabase handles redirection. onAuthStateChange will pick up the session after redirect.
      // setIsLoading(false) might not be reached if redirect happens fast.
      // It will be set to false by onAuthStateChange eventually.
    } catch (error: any) {
      console.error(`${provider} login error:`, error);
      setIsLoading(false); // Set loading to false on error
    }
    // No finally block for setIsLoading(false) here due to redirection.
  };

  const loginWithGoogle = () => loginWithProvider('google');
  const loginWithFacebook = () => loginWithProvider('facebook');
  const loginWithTwitter = () => loginWithProvider('twitter');


  const loginWithWeb3 = async () => {
    setIsLoading(true);
    // This is a placeholder. Real Web3 login needs backend verification.
    console.log("Web3 login requested - Placeholder Implementation");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn("No wallet detected");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      setUser({
        id: address,
        displayName: address,
        profileComplete: true
      });
    } catch (err) {
      console.error('Web3 login failed', err);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    // Add aliases for compatibility
    login: signIn,
    logout: signOut,
    signup: signUp,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
