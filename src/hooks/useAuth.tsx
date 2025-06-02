import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails as AuthUserDetails } from "@/types/auth"; // This type might be more specific than the local UserDetails
import { subscribeToPush } from "@/utils/pushSubscription";
import type { AuthError } from "@supabase/supabase-js"; // Import Supabase error type

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

// For functions returning an error object
type AuthResponse = { error: AuthError | Error | null };
// For updateProfile which might also return data on success (though not explicitly typed here)
type ProfileUpdateResponse = { error: AuthError | Error | null; data?: UserDetails | null };


export interface AuthContextType {
  user: UserDetails | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>; // signOut in Supabase doesn't typically return an error in the same way
  signUp: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<AuthResponse>;
  // Aliases for compatibility
  login: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, userData?: Partial<UserDetails>) => Promise<AuthResponse>;
  resetPassword: (email: string) => Promise<AuthResponse>;
  updateProfile: (data: Partial<UserDetails>) => Promise<ProfileUpdateResponse>;
  loginWithGoogle: () => Promise<void>; // signInWithOAuth doesn't return error in promise, handles via redirect
  loginWithFacebook: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  loginWithWeb3: () => Promise<void>;
  setUser?: (user: UserDetails | null) => void;
}

// For window.ethereum
interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] | object }) => Promise<unknown>;
  isMetaMask?: boolean;
  // Add other common methods/properties if needed: on, removeListener, etc.
}

// Augment the global Window interface
declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
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
          try {
            const response = await fetch("/api/users/me"); 
            if (!response.ok) {
              if (response.status === 401) {
                console.warn("User profile fetch returned 401, signing out locally.");
                await supabase.auth.signOut(); 
                setUser(null);
                setIsLoading(false);
                return;
              }
              throw new Error(`Failed to fetch user profile: ${response.statusText}`);
            }
            const profile: AuthUserDetails = await response.json(); // Use imported UserDetails if more specific

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

          } catch (error) {
            console.error("Error fetching user profile:", error);
            await supabase.auth.signOut();
            setUser(null);
          }
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

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
              await supabase.auth.signOut();
              setUser(null);
            } else {
              throw new Error(`Failed to fetch user profile on initial load: ${response.statusText}`);
            }
          } else {
            const profile: AuthUserDetails = await response.json();
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

  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return { error: null };
    } catch (error: unknown) {
      console.error("Sign in error:", error);
      setIsLoading(false); 
      return { error: error instanceof Error ? error : new Error(String(error)) };
    }
  };

  const signOut = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null); 
    } catch (error: unknown) {
      console.error("Sign out error:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, userData?: Partial<UserDetails>): Promise<AuthResponse> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            name: userData?.name, 
            user_type: userData?.userType,
          },
        },
      });
      if (error) throw error;
      // Profile creation would typically be handled by onAuthStateChange or a trigger
      setIsLoading(false);
      return { error: null };
    } catch (error: unknown) {
      console.error("Sign up error:", error);
      setIsLoading(false);
      return { error: error instanceof Error ? error : new Error(String(error)) };
    }
  };

  const resetPassword = async (email: string): Promise<AuthResponse> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setIsLoading(false);
      return { error: null };
    } catch (error: unknown) {
      console.error("Reset password error:", error);
      setIsLoading(false);
      return { error: error instanceof Error ? error : new Error(String(error)) };
    }
  };

  const updateProfile = async (data: Partial<UserDetails>): Promise<ProfileUpdateResponse> => {
    setIsLoading(true);
    if (!user || !user.id) {
      setIsLoading(false);
      return { error: new Error("User not authenticated") };
    }
    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile on backend");
      }
      const updatedProfileFromBackend: UserDetails = await response.json();

      setUser(prevUser => ({
        ...prevUser,
        ...updatedProfileFromBackend 
      }));
      setIsLoading(false);
      return { error: null, data: updatedProfileFromBackend };
    } catch (error: unknown) {
      console.error("Update profile error:", error);
      setIsLoading(false);
      return { error: error instanceof Error ? error : new Error(String(error)) };
    }
  };

  const loginWithProvider = async (provider: 'google' | 'facebook' | 'twitter'): Promise<void> => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      console.error(`${provider} login error:`, error);
      setIsLoading(false); 
    }
  };

  const loginWithGoogle = () => loginWithProvider('google');
  const loginWithFacebook = () => loginWithProvider('facebook');
  const loginWithTwitter = () => loginWithProvider('twitter');


  const loginWithWeb3 = async (): Promise<void> => {
    setIsLoading(true);
    console.log("Web3 login requested - Placeholder Implementation");
    const ethereum = window.ethereum; // Uses augmented Window interface
    if (!ethereum) {
      console.warn("No wallet detected");
      setIsLoading(false);
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }) as string[];
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts returned from wallet.");
      }
      const address = accounts[0];
      // Placeholder for actual sign-in logic which would involve backend verification
      await ethereum.request({
        method: 'personal_sign',
        params: [address, `Logging in to Zion AI Marketplace: ${Date.now()}`] // Example message
      });
      // SIMULATED: In a real app, you'd call your backend with the signed message,
      // backend verifies, creates/returns a session & user profile.
      // Then onAuthStateChange or a manual setUser would update context.
      setUser({ // This is a placeholder for actual user data post-Web3 auth
        id: address,
        displayName: `${address.substring(0, 6)}...${address.substring(address.length - 4)}`,
        email: `${address}@example.web3`, // Placeholder email
        profileComplete: false, // Assume profile needs completion
        userType: "web3_user",
      });
    } catch (err: unknown) {
      console.error('Web3 login failed', err);
      // Consider showing a toast to the user
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = { // Ensure this matches AuthContextType
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
    signUp,
    login: signIn,
    logout: signOut,
    signup: signUp,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    setUser // Expose setUser if needed by other parts of the app, otherwise can be internal
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
