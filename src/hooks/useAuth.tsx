import React, { useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContext } from "@/context/auth/AuthContext";
import type { UserDetails, AuthContextType } from "@/types/auth";
import { subscribeToPush } from "@/utils/pushSubscription";


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
                console.warn("AuthProvider: User profile fetch returned 401 during onAuthStateChange, signing out locally.");
                await supabase.auth.signOut();
                setUser(null);
                // setIsLoading(false); // Moved to finally
                return;
              }
              throw new Error(`Failed to fetch user profile: ${response.statusText}`);
            }
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
              try {
                await subscribeToPush();
              } catch (pushError) {
                console.error("AuthProvider: Failed to subscribe to push notifications during onAuthStateChange:", pushError);
              }
            }

          } catch (error) {
            console.error("AuthProvider: Error fetching user profile during onAuthStateChange:", error);
            // Ensure isLoading is false before potential early return due to signOut failure
            // It will be set again in finally, but this handles the immediate catch block
            setIsLoading(false);
            try {
              await supabase.auth.signOut();
            } catch (signOutError) {
              console.error("AuthProvider: Error during signOut in onAuthStateChange error handler:", signOutError);
            }
            setUser(null);
          } finally {
            setIsLoading(false);
          }
        } else {
          setUser(null);
          setIsLoading(false); // Also set loading to false if no current user
        }
      }
    );

    // Check initial session state on mount
    const checkSession = async () => {
      setIsLoading(true); // Ensure loading is true at the start of checkSession
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("AuthProvider: Error getting session during checkSession:", sessionError);
          setUser(null);
          // setIsLoading(false); // Moved to finally
          return; // Return here as session is critical
        }

        if (session) {
          const currentUser = session.user;
          try {
            const response = await fetch("/api/users/me");
            if (!response.ok) {
              if (response.status === 401) {
                console.warn("AuthProvider: User profile fetch returned 401 during checkSession, signing out locally.");
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
                try {
                  await subscribeToPush();
                } catch (pushError) {
                  console.error("AuthProvider: Failed to subscribe to push notifications during checkSession:", pushError);
                }
              }
            }
          } catch (error) {
            console.error("AuthProvider: Error fetching user profile on initial load during checkSession:", error);
            // Ensure isLoading is false before potential early return due to signOut failure
            setIsLoading(false);
            try {
              await supabase.auth.signOut();
            } catch (signOutError) {
              console.error("AuthProvider: Error during signOut in checkSession error handler:", signOutError);
            }
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) { // Catch errors from getSession itself
        console.error("AuthProvider: Critical error in checkSession (e.g. getSession failed):", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
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
      // setIsLoading(false) will be handled by onAuthStateChange or its error handlers.
      return { error: null };
    } catch (error: any) {
      console.error("AuthProvider: Sign in error:", error);
      setIsLoading(false); // Ensure loading is false on direct error here
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
      console.error("AuthProvider: Sign out error:", error);
      // Even if signout fails, try to clear local state
      setUser(null); // Still attempt to clear local state
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
      // setIsLoading(false) will be handled by onAuthStateChange or its error handlers.
      return { error: null };
    } catch (error: any) {
      console.error("AuthProvider: Sign up error:", error);
      setIsLoading(false); // Ensure loading is false on direct error here
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
      return { error: null };
    } catch (error: any) {
      console.error("AuthProvider: Reset password error:", error);
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserDetails>) => {
    setIsLoading(true);
    if (!user || !user.id) {
      setIsLoading(false);
      console.warn("AuthProvider: updateProfile called without authenticated user.");
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
      return { error: null };
    } catch (error: any) {
      console.error("AuthProvider: Update profile error:", error);
      return { error };
    } finally {
      setIsLoading(false);
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
      console.error(`AuthProvider: ${provider} login error:`, error);
      setIsLoading(false); // Crucial: if signInWithOAuth fails before redirecting
    }
    // No finally block for setIsLoading(false) here due to redirection.
  };

  const loginWithGoogle = () => loginWithProvider('google');
  const loginWithFacebook = () => loginWithProvider('facebook');
  const loginWithTwitter = () => loginWithProvider('twitter');


  const loginWithWeb3 = async () => {
    setIsLoading(true);
    // This is a placeholder. Real Web3 login needs backend verification.
    console.log("AuthProvider: Web3 login requested - Placeholder Implementation");
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      console.warn("AuthProvider: No wallet detected for Web3 login");
      setIsLoading(false);
      return;
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      await ethereum.request({
        method: 'personal_sign',
        params: [address, address]
      });
      // This is a placeholder and insecure. Real Web3 login requires backend verification.
      setUser({
        id: address,
        displayName: address,
        profileComplete: true // Assuming basic profile from address
      });
    } catch (err) {
      console.error('AuthProvider: Web3 login failed', err);
    } finally {
      setIsLoading(false);
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
