import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 
    user, setUser, 
    isLoading, setIsLoading, 
    onboardingStep, setOnboardingStep 
  } = useAuthState();
  
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep);

  const {
    login: loginImpl,
    signup: signupImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading);

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    return loginImpl({ email, password });
  };

  // Wrapper for signup to match the AuthContextType interface
  const signup = async (email: string, password: string, userData?: any) => {
    return signupImpl({ email, password, display_name: userData });
  };

  useEffect(() => {
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error } = await getFromProfiles()
              .select('*')
              .eq('id', session.user.id)
              .single();

            if (profile) {
              const mappedUser = mapProfileToUser(session.user, profile);
              setUser(mappedUser);
              
              // Show welcome toast when user logs in
              if (event === 'SIGNED_IN') {
                handleSignedIn(mappedUser);
              }
            } else if (error) {
              console.error("Error fetching user profile:", error);
              setUser(null);
            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
            setUser(null);
          }
        } else {
          setUser(null);
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut();
          }
        }
        setIsLoading(false);
      }
    );

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const authContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    onboardingStep
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};