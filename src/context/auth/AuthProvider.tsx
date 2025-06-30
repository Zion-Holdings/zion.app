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
// logger from '@/utils/logger' is removed
import { logInfo, logWarn, logErrorToProduction, logDebug } from '@/utils/productionLogger';


const LOGIN_TIMEOUT_MS = 15000; // 15 seconds timeout

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    logInfo('[AuthProvider] Initializing...');
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
    loginWithGitHub,
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
        logErrorToProduction("AuthProvider: Supabase authentication failed", supabaseError, { context: 'Supabase Auth Login' });
        
        // Provide specific error messages based on error code
        let errorMessage = "Authentication failed. Please try again.";
        let toastTitle = "Authentication Error";
        
        if (supabaseError.message || (supabaseError as any).code) { // Check code as well
          const messageIncludesEmailNotConfirmed = supabaseError.message?.toLowerCase().includes("email not confirmed") ||
                                                 supabaseError.message?.toLowerCase().includes("email address is not confirmed");
          const codeIsEmailNotVerified = (supabaseError as any).code === 'email_not_verified';

          if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
            errorMessage = "Your email address needs to be verified. Please check your inbox for a verification link and click it to activate your account.";
            toastTitle = "Email Verification Required";
          } else if (supabaseError.message?.toLowerCase().includes("invalid login credentials") ||
                     supabaseError.message?.toLowerCase().includes("invalid credentials")) {
            errorMessage = "Invalid email or password. Please check your credentials and try again.";
            toastTitle = "Invalid Credentials";
          } else if (supabaseError.message?.toLowerCase().includes("too many requests")) {
            errorMessage = "Too many login attempts. Please wait a moment before trying again.";
            toastTitle = "Rate Limited";
          } else {
            errorMessage = supabaseError.message || "An unknown authentication error occurred.";
          }
        }
        
        // Show specific toast based on error type
        toast({
          title: toastTitle,
          description: errorMessage,
          variant: "destructive",
        });
        
        setIsLoading(false);
        return { error: errorMessage };
      }

              logDebug('AuthProvider: Supabase authentication successful');
      // The onAuthStateChange event should now trigger automatically
      return { error: null }; // Successful login
    } catch (error: any) {
      logErrorToProduction('[AuthProvider] login function error', error, { context: 'Login Exception' });
      
      // Handle unexpected errors with a fallback message
      const errorMessage = error.message || "An unexpected error occurred during login. Please try again.";
      
      toast({
        title: "Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      setIsLoading(false);
      return { error: errorMessage };
    }
  };

  // Refactored signup method to use Auth0 API
  const signup = async (email: string, password: string, userData: Partial<UserDetails> = {}) => {
    setIsLoading(true);
    try {
      const { name = '' } = userData;
      
      // Use Auth0 API via our register endpoint instead of Supabase
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          ...userData
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        logErrorToProduction('Auth0 signup error:', { data: data });
        toast({
          title: "Signup Failed",
          description: data.error || data.message || "An unexpected error occurred during signup.",
          variant: "destructive",
        });
        setIsLoading(false);
        return { error: data.error || data.message || "Signup failed", emailVerificationRequired: false };
      }

      toast({
        title: "Signup Successful",
        description: data.message || "Please check your email to verify your account.",
      });
      setIsLoading(false);
      return { 
        error: null, 
        emailVerificationRequired: data.emailVerificationRequired || true,
        user: data.user 
      };
    } catch (err: any) {
      logErrorToProduction('Signup exception:', { data: err });
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
      logInfo('[App] MyApp main useEffect hook started.');
    }
    
    // Clean up any potential stale auth state before setting up listeners
    cleanupAuthState();

    if (!isSupabaseConfigured) {
      logWarn('[AuthProvider] Supabase not configured - skipping auth state listener');
      setIsLoading(false);
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      // Inside the onAuthStateChange callback
      async (event: any, session: any) => {
        if (process.env.NODE_ENV === 'development') {
            logDebug('AuthProvider: onAuthStateChange entered', { isLoading, event, sessionExists: !!session });
        }

        // Only set isLoading true if we are expecting a significant state change or async operation
        // For example, when a user is signing in, or we are actively fetching a profile.
        // Avoid setting it true for every single event if not necessary.

        try {
            // If a session and user exist AND the event indicates a successful login or session refresh
            if (session?.user && (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED')) {
                setIsLoading(true); // Set loading before starting async profile fetch
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] Session and user found, and event is appropriate. User ID:', { data: { userId: session.user.id, event: event } });
                }

                try {
                    if (process.env.NODE_ENV === 'development') {
                        logInfo('[AuthProvider DEBUG] Attempting to fetch profile for user ID:', { data: session.user.id });
                    }
                    
                    const { data: profile, error: profileError } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', session.user.id)
                        .single();

                    if (process.env.NODE_ENV === 'development') {
                        logInfo('[AuthProvider DEBUG] Raw profile data:', { data: JSON.stringify(profile, null, 2) });
                        logInfo('[AuthProvider DEBUG] Profile fetch error (if any):', { data: JSON.stringify(profileError, null, 2) });
                    }

                    if (profileError) {
                        logErrorToProduction('[AuthProvider DEBUG] Error fetching user profile:', { data: profileError });
                        let shouldSignOut = false;
                        // Check for common indicators of auth failure in Supabase errors
                        // Supabase errors might have a __isAuthError boolean, or specific messages/status codes.
                        // Adjust these checks based on actual Supabase error object structure.
                        const message = profileError.message?.toLowerCase() || "";
                        const status = (profileError as any).status; // Supabase errors might not always have a 'status' directly

                        if (message.includes('jwt') || message.includes('unauthorized') || message.includes('invalid token') || status === 401) {
                            shouldSignOut = true;
                            logWarn(`[AuthProvider] Profile fetch failed with auth-like error for user ${session.user.id} (event: ${event}). Message: ${profileError.message}. Attempting sign out.`);
                        } else {
                             logWarn(`[AuthProvider] Profile fetch failed for user ${session.user.id} (event: ${event}). Message: ${profileError.message}. Not treated as auth error for immediate signout.`);
                        }

                        // Only show toast if it's a genuine signed-in event, not for passive token refreshes if profile is missing
                        if (event === 'SIGNED_IN' && !shouldSignOut) { // Avoid double toasting if signout will occur
                            toast({
                                title: "Profile Load Error",
                                description: `Login successful, but failed to load your profile. ${profileError.message}`,
                                variant: "destructive",
                            });
                        }

                        setUser(null);
                        setAvatarUrl(null);

                        if (shouldSignOut) {
                            // This will trigger onAuthStateChange with 'SIGNED_OUT' event, which handles full cleanup.
                            await supabase.auth.signOut();
                        }
                    } else if (profile) {
                        logInfo('[AuthProvider DEBUG] Profile data fetched successfully.');
                        let mappedUser;
                        try {
                            logInfo('[AuthProvider DEBUG] Mapping profile to user. session.user:', { data: { sessionUser: JSON.stringify(session.user, null, 2), profile: JSON.stringify(profile, null, 2) } });
                            mappedUser = mapProfileToUser(session.user, profile);
                            logInfo('[AuthProvider DEBUG] Mapped user data:', { data: JSON.stringify(mappedUser, null, 2) });
                        } catch (mappingError) {
                            logErrorToProduction('[AuthProvider DEBUG] Error mapping profile to user:', { data: mappingError });
                            mappedUser = null;
                        }

                        if (mappedUser) {
                            setUser(mappedUser);
                            setAvatarUrl(mappedUser.avatarUrl || null);
                            logInfo('[AuthProvider DEBUG] User state updated in context.');

                            // Call handleSignedIn for SIGNED_IN event to trigger redirection etc.
                            if (event === 'SIGNED_IN') {
                                 logInfo('[AuthProvider DEBUG] Event is SIGNED_IN. Calling handleSignedIn.');
                                 logInfo('[AuthProvider DEBUG] User object being passed to handleSignedIn:', { data: JSON.stringify(mappedUser, null, 2) });
                                 handleSignedIn(mappedUser); // This often handles redirection

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
                                      logInfo('[AuthProvider DEBUG] Redirecting to (from storage):', { data: redirectTo });
                                    } else if (nextFromUrl) {
                                      redirectTo = decodeURIComponent(nextFromUrl);
                                      logInfo('[AuthProvider DEBUG] Redirecting to (from URL params):', { data: redirectTo });
                                    } else {
                                      logInfo('[AuthProvider DEBUG] Redirecting to default dashboard.');
                                    }
                                    logInfo('[AuthProvider DEBUG] Attempting to redirect to:', { data: redirectTo });
                                    router.replace(redirectTo);
                                  } catch (redirectError) {
                                    logErrorToProduction('[AuthProvider DEBUG] Error during redirection:', { data: redirectError });
                                  }
                            }
                        } else {
                            logErrorToProduction("[AuthProvider DEBUG] Mapped user is null. Not updating user state. Mapping failed or profile was insufficient.");
                             if (event === 'SIGNED_IN') { // Only toast if it was an active sign-in attempt
                                toast({
                                    title: "User Data Error",
                                    description: "Failed to process user information after login. Please contact support.",
                                    variant: "destructive",
                                });
                             }
                             setUser(null);
                             setAvatarUrl(null);
                        }
                    } else { // Profile is null, but no error
                        logWarn('[AuthProvider DEBUG] Profile not found for user (no error, but profile is null):', { data: session.user.id });
                        if (event === 'SIGNED_IN') { // Only toast if it was an active sign-in attempt
                            toast({
                                title: "Profile Not Found",
                                description: "Login successful, but your profile could not be found. Please contact support.",
                                variant: "destructive",
                            });
                        }
                        setUser(null);
                        setAvatarUrl(null);
                    }
                } catch (profileMapError) {
                    // This catch block is for errors specifically within the profile fetching/user mapping phase
                    logErrorToProduction('[AuthProvider DEBUG] Critical error in profile fetching/user mapping phase:', { data: profileMapError });
                     if (event === 'SIGNED_IN') {
                        toast({
                            title: "User Initialization Error",
                            description: "A critical error occurred while setting up your user account. Please try logging out and in again.",
                            variant: "destructive",
                        });
                    }
                    setUser(null);
                    setAvatarUrl(null);
                    // Potentially call cleanupAuthState() or handleSignedOut() if appropriate
                } finally {
                    logInfo('[AuthProvider DEBUG] onAuthStateChange profile fetch: Entering finally block. Current isLoading:', { data: isLoading });
                    setIsLoading(false); // Stop loading after profile fetch attempt
                    logInfo('[AuthProvider DEBUG] onAuthStateChange profile fetch: setIsLoading(false) called. New isLoading:', { data: isLoading });
                }
            } else if (event === 'SIGNED_OUT') {
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] Event is SIGNED_OUT. Clearing user state and calling handleSignedOut.');
                }
                setIsLoading(true); // Briefly set loading true while clearing state
                setUser(null);
                setAvatarUrl(null);
                setTokens(null); // Clear tokens
                cleanupAuthState(); // Utility to clear local/session storage
                logInfo('[AuthProvider DEBUG] onAuthStateChange: Calling handleSignedOut for SIGNED_OUT event.');
                handleSignedOut();
                setIsLoading(false);
                logInfo('[AuthProvider DEBUG] onAuthStateChange SIGNED_OUT: setIsLoading(false) called. New isLoading:', { data: isLoading });
            } else {
                // Handles cases like:
                // - No session initially (e.g., anonymous user on first load)
                // - Events like PASSWORD_RECOVERY, USER_DELETED etc. that don't imply an active session for profile fetch
                // - Or if session.user is null even if session object exists.
                if (process.env.NODE_ENV === 'development') {
                    logInfo('[AuthProvider DEBUG] No active session for profile fetch or event is not SIGNED_IN/TOKEN_REFRESHED/USER_UPDATED. Event:', { data: { event: event, sessionUserPresent: !!session?.user } });
                }
                // If user is not null, it means there was a user, but now the session is not one for active profile loading.
                // This could happen if a token refresh fails and Supabase reverts to no user, or an initial check.
                if (user !== null) { // Only update state if it's currently non-null, to avoid unnecessary re-renders
                  setUser(null);
                  setAvatarUrl(null);
                  setTokens(null);
                }
                // Ensure isLoading is false if no action is taken or if we fall through here.
                // This is crucial for anonymous users on initial load.
                if (isLoading) { // Only set if it's currently true
                    setIsLoading(false);
                    logInfo('[AuthProvider DEBUG] onAuthStateChange fallback: setIsLoading(false) called. New isLoading:', { data: isLoading });
                }
            }
        } catch (outerError) { // Catch errors from the main try block in onAuthStateChange
            logErrorToProduction('[AuthProvider DEBUG] Outer error in onAuthStateChange callback:', { data: outerError });
            setUser(null); // Ensure user state is cleared
            setAvatarUrl(null);
            setTokens(null);
            setIsLoading(false); // Ensure loading is false on any error
            logInfo('[AuthProvider DEBUG] onAuthStateChange outer catch: setIsLoading(false) called. New isLoading:', { data: isLoading });
        }
        // Final check to ensure isLoading is false if we've reached the end of processing for this event
        // This is particularly important if an early exit or an unhandled case doesn't reset it.
        if (isLoading) {
             // logInfo('[AuthProvider DEBUG] onAuthStateChange: Reached end of callback, ensuring isLoading is false. Current isLoading was true.');
             // setIsLoading(false); // This might be too broad, rely on specific path resets.
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
          logErrorToProduction('Supabase password reset error:', { data: error });
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
        logErrorToProduction('Password reset exception:', { data: err });
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
    loginWithGitHub,
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