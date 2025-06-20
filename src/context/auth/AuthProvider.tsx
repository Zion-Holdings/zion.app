import React, { useEffect } from "react";
import { supabase, isSupabaseConfigured } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage, safeSessionStorage } from "@/utils/safeStorage";
import { UserDetails } from "@/types/auth";
import { toast } from "@/hooks/use-toast"; // Import toast
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

const LOGIN_TIMEOUT_MS = 15000; // 15 seconds timeout

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[AuthProvider] Initializing...');
  }
  const {
    user, setUser,
    isLoading, setIsLoading,
    onboardingStep, setOnboardingStep,
    tokens, setTokens,
    avatarUrl, setAvatarUrl
  } = useAuthState();
  
  const router = useRouter(); // Changed from useNavigate and useLocation
  const dispatch = useDispatch<AppDispatch>();
  const { handleSignedIn, handleSignedOut } = useAuthEventHandlers(setUser, setOnboardingStep, router); // Pass router instance

  const {
    login: signInImpl,
    signUp: signUpImpl,
    logout,
    resetPassword,
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3
  } = useAuthOperations(setUser, setIsLoading, setAvatarUrl);

  // Wrapper for login to match the AuthContextType interface
  const login = async (
    email: string,
    password: string,
    rememberMe = false
  ) => {
    setIsLoading(true); // Set loading true at the start of login attempt
    try {
      // Production/Supabase mode - attempt to sign in with Supabase
      const { error: supabaseError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (supabaseError) {
        console.error("[AuthProvider DEBUG] Supabase authentication failed:", supabaseError);
        toast({
          title: "Authentication Error",
          description: supabaseError.message || "Failed to authenticate with Supabase.",
          variant: "destructive",
        });
        setIsLoading(false);
        return { error: supabaseError.message || "Authentication failed." };
      }

      console.log('[AuthProvider DEBUG] Supabase authentication successful');
      // The onAuthStateChange event should now trigger automatically
      return { error: null }; // Successful login
    } catch (error: any) {
      console.error('[AuthProvider] login function error:', error);
      toast({
        title: "Login Failed",
        description: error.message || "An unexpected error occurred during login. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return { error: error.message || "Login failed" };
    }
  };

  // Refactored signup method
  const signup = async (email: string, password: string, userData: Partial<UserDetails> = {}) => {
    setIsLoading(true);
    try {
      const { name = '' } = userData;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...userData,
            display_name: name, // Store name in display_name
          },
        },
      });

      if (error) {
        console.error("Supabase signup error:", error);
        toast({
          title: "Signup Failed",
          description: error.message || "An unexpected error occurred during signup.",
          variant: "destructive",
        });
        setIsLoading(false);
        return { error: error.message || "Signup failed", emailVerificationRequired: false };
      }

      toast({
        title: "Signup Successful",
        description: "Please check your email to verify your account.",
      });
      setIsLoading(false);
      return { error: null, emailVerificationRequired: true };
    } catch (err: any) {
      console.error("Signup exception:", err);
      toast({
        title: "Signup Failed",
        description: err.message || "An unexpected error occurred during signup.",
        variant: "destructive",
      });
      setIsLoading(false);
      return { error: err.message || "Signup failed", emailVerificationRequired: false };
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[App] MyApp main useEffect hook started.');
    }
    
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();

    if (!isSupabaseConfigured) {
      console.warn('[AuthProvider] Supabase not configured - skipping auth state listener');
      setIsLoading(false);
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      // Inside the onAuthStateChange callback
      async (event: any, session: any) => {
              if (process.env.NODE_ENV === 'development') {
                console.log('[AuthProvider DEBUG] onAuthStateChange: Entered. Current isLoading:', isLoading);
                console.log('[AuthProvider DEBUG] onAuthStateChange triggered. Event:', event);
                console.log('[AuthProvider DEBUG] Session object:', JSON.stringify(session, null, 2));
              }
      
              setIsLoading(true); // Ensure isLoading is true at the start
              if (process.env.NODE_ENV === 'development') {
                console.log('[AuthProvider DEBUG] onAuthStateChange: setIsLoading(true) called. New isLoading:', isLoading);
              }
      
              try {
                if (session?.user) {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[AuthProvider DEBUG] Session and user found. User ID:', session.user.id);
                  }

                  // Inner try-catch for profile fetching and mapping
                  try {
                    if (process.env.NODE_ENV === 'development') {
                      console.log('[AuthProvider DEBUG] Attempting to fetch profile for user ID:', session.user.id);
                      console.log('[AuthProvider DEBUG] Supabase query: supabase.from("profiles").select("*").eq("id", session.user.id).single()');
                      console.log('[AuthProvider DEBUG] onAuthStateChange: About to fetch profile. Session user available:', !!session?.user);
                    }
                    
                    const { data: profile, error: profileError } = await supabase
                      .from('profiles')
                      .select('*')
                      .eq('id', session.user.id)
                      .single();

                    if (process.env.NODE_ENV === 'development') {
                      console.log('[AuthProvider DEBUG] Raw profile data:', JSON.stringify(profile, null, 2));
                      console.log('[AuthProvider DEBUG] Profile fetch error (if any):', JSON.stringify(profileError, null, 2));
                    }

                    if (profileError) {
                      console.error("[AuthProvider DEBUG] Error fetching user profile:", profileError);
                      console.error('[AuthProvider DEBUG] onAuthStateChange: Profile fetch failed.', profileError);
                      let errorMessage = 'An error occurred while loading your profile. Please try again or contact support.';
                      if (profileError instanceof Error) {
                        errorMessage = profileError.message;
                      } else if (typeof profileError === 'object' && profileError !== null && 'message' in profileError) {
                        errorMessage = (profileError as {message: string}).message;
                      }
                      toast({
                        title: "Profile Load Error",
                        description: `Login successful, but failed to load your profile. ${errorMessage}`,
                        variant: "destructive",
                      });
                      setUser(null); // Ensure user is cleared
                      setAvatarUrl(null);
                      // Do NOT redirect to dashboard if profile load fails.
                    } else if (profile) {
                      console.log('[AuthProvider DEBUG] Profile data fetched successfully.');
                      let mappedUser;
                      try {
                        console.log('[AuthProvider DEBUG] Mapping profile to user. session.user:', JSON.stringify(session.user, null, 2), 'profile:', JSON.stringify(profile, null, 2));
                        mappedUser = mapProfileToUser(session.user, profile);
                        console.log('[AuthProvider DEBUG] Mapped user data:', JSON.stringify(mappedUser, null, 2));
                      } catch (mappingError) {
                        console.error("[AuthProvider DEBUG] Error mapping profile to user:", mappingError);
                        mappedUser = null; // Ensure mappedUser is null if mapping fails
                      }
        
                      if (mappedUser) {
                        setUser(mappedUser);
                        setAvatarUrl(mappedUser.avatarUrl || null);
                        console.log('[AuthProvider DEBUG] User state updated in context.');
        
                        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
                          console.log('[AuthProvider DEBUG] Event is SIGNED_IN/TOKEN_REFRESHED/USER_UPDATED. Calling handleSignedIn.');
                          console.log('[AuthProvider DEBUG] User object being passed to handleSignedIn:', JSON.stringify(mappedUser, null, 2));
                          console.log('[AuthProvider DEBUG] onAuthStateChange: Calling handleSignedIn.');
                          handleSignedIn(mappedUser);
        
                          // Redirection logic
                          try {
                            const queryStringAuthChange = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '';
                            const paramsAuthChange = new URLSearchParams(queryStringAuthChange);
                            const nextFromUrl = paramsAuthChange.get('redirectTo') || paramsAuthChange.get('next');
                            const nextPathFromStorage = safeStorage.getItem('nextPath');
                            let redirectTo = '/dashboard'; // Default
        
                            if (nextPathFromStorage) {
                              redirectTo = decodeURIComponent(nextPathFromStorage);
                              safeStorage.removeItem('nextPath');
                              console.log('[AuthProvider DEBUG] Redirecting to (from storage):', redirectTo);
                            } else if (nextFromUrl) {
                              redirectTo = decodeURIComponent(nextFromUrl);
                              console.log('[AuthProvider DEBUG] Redirecting to (from URL params):', redirectTo);
                            } else {
                              console.log('[AuthProvider DEBUG] Redirecting to default dashboard.');
                            }
                            console.log('[AuthProvider DEBUG] Attempting to redirect to:', redirectTo);
                            router.replace(redirectTo);
                          } catch (redirectError) {
                            console.error("[AuthProvider DEBUG] Error during redirection:", redirectError);
                          }
                        }
                      } else {
                        console.error("[AuthProvider DEBUG] Mapped user is null. Not updating user state. Mapping failed or profile was insufficient.");
                        console.warn('[AuthProvider DEBUG] onAuthStateChange: mappedUser is null after mapping.');
                        // Consider if user should be cleared or toast shown if mapping fails but profile was technically fetched
                         toast({
                            title: "User Data Error",
                            description: "Failed to process user information after login. Please contact support.",
                            variant: "destructive",
                         });
                         setUser(null);
                         setAvatarUrl(null);
                      }
                    } else { // Profile is null, but no error
                      console.warn("[AuthProvider DEBUG] Profile not found for user (no error, but profile is null):", session.user.id);
                      console.warn('[AuthProvider DEBUG] onAuthStateChange: Profile fetched but is null.');
                      toast({
                        title: "Profile Not Found",
                        description: "Login successful, but your profile could not be found. Please contact support.",
                        variant: "destructive",
                      });
                      setUser(null); // Ensure user is cleared
                      setAvatarUrl(null);
                    }
                  } catch (profileMapError) {
                    // This catch block is for errors specifically within the profile fetching/user mapping phase
                    console.error("[AuthProvider DEBUG] Critical error in profile fetching/user mapping phase:", profileMapError);
                    toast({
                      title: "User Initialization Error",
                      description: "A critical error occurred while setting up your user account. Please try logging out and in again.",
                      variant: "destructive",
                    });
                    setUser(null);
                    setAvatarUrl(null);
                    // Potentially call cleanupAuthState() or handleSignedOut() if appropriate
                  }
                } else { // No session or session.user is null
                  console.log('[AuthProvider DEBUG] onAuthStateChange: No session or session.user. Event:', event);
                  console.log('[AuthProvider DEBUG] No session or session.user. Clearing user state. Event:', event);
                  setUser(null);
                  setAvatarUrl(null);
                  if (event === 'SIGNED_OUT') {
                    console.log('[AuthProvider DEBUG] Event is SIGNED_OUT, calling handleSignedOut.');
                    console.log('[AuthProvider DEBUG] onAuthStateChange: Calling handleSignedOut.');
                    handleSignedOut(); // Ensure this is called
                    // Optional: redirect to login if not already there or on a public page
                    // if (router.pathname !== '/auth/login') router.replace('/auth/login');
                  }
                }
              } catch (outerError) { // Catch errors from the main try block in onAuthStateChange
                console.error("[AuthProvider DEBUG] Outer error in onAuthStateChange callback:", outerError);
                setUser(null); // Ensure user state is cleared
                setAvatarUrl(null);
              } finally {
                console.log('[AuthProvider DEBUG] onAuthStateChange: Entering finally block. Current isLoading:', isLoading);
                setIsLoading(false); // Ensure isLoading is false at the end
                console.log('[AuthProvider DEBUG] onAuthStateChange: setIsLoading(false) called. New isLoading:', isLoading);
                console.log('[AuthProvider DEBUG] onAuthStateChange finished processing. isLoading set to false.');
              }
            }
          );

    return () => {
      subscription.unsubscribe();
    };
  }, [router, dispatch, handleSignedIn, handleSignedOut, setOnboardingStep, setUser, setAvatarUrl, setTokens]); // Added router and other dependencies

  const authContextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: login, // Use the custom login function instead of signInImpl
    // register, // Removed as signup now covers its functionality
    signUp: signup, // Use the custom signup function instead of signUpImpl
    logout,
    resetPassword: async (email: string) => {
      setIsLoading(true);
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/verify-email`,
        });
        if (error) {
          console.error("Supabase password reset error:", error);
          toast({
            title: "Password Reset Failed",
            description: error.message || "Failed to send password reset email.",
            variant: "destructive",
          });
          setIsLoading(false);
          return { error: error.message || "Password reset failed" };
        }
        toast({
          title: "Password Reset Email Sent",
          description: "Please check your email to reset your password.",
        });
        setIsLoading(false);
        return { error: null };
      } catch (err: any) {
        console.error("Password reset exception:", err);
        toast({
          title: "Password Reset Failed",
          description: err.message || "An unexpected error occurred during password reset.",
          variant: "destructive",
        });
        setIsLoading(false);
        return { error: err.message || "Password reset failed" };
      }
    },
    updateProfile,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithWeb3,
    setUser,
    onboardingStep,
    tokens,
    avatarUrl,
    setAvatarUrl
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};