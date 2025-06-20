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
  console.log('[AuthProvider] Initializing...');
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
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Login timed out")), LOGIN_TIMEOUT_MS)
      );

      // Make API call to our custom login endpoint, raced with timeout
      const { res, data } = await Promise.race([
        loginUser(email, password),
        timeoutPromise,
      ]) as { res: any; data: any }; // Type assertion needed after Promise.race

      console.log('[AuthProvider] loginUser API call successful:', { res, data });

      // Our API uses a different approach - it directly returns user data from our custom login API
      // We need to handle Supabase authentication differently for our setup
      console.log('[AuthProvider] Login successful via custom API, now setting up authentication');

      // Since our API doesn't return Supabase tokens, we need to handle authentication differently
      // For development mode with environment-based authentication or Supabase with direct password sign-in
      if (data.user) {
        console.log('[AuthProvider DEBUG] User data received from API:', data.user);
        
        // Check if we're using Supabase (ENV_CONFIG would be available) 
        // If not, we'll simulate the auth state change for development mode
        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          // Production/Supabase mode - attempt to sign in with Supabase
          const { data: supabaseAuthData, error: supabaseError } = await supabase.auth.signInWithPassword({
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
            return { error: supabaseError.message || "Authentication failed." };
          }

          console.log('[AuthProvider DEBUG] Supabase authentication successful');
          // The onAuthStateChange event should now trigger automatically
        } else {
          // Development mode - simulate successful authentication
          console.log('[AuthProvider DEBUG] Development mode - simulating authentication');
          setUser(data.user);
          setIsLoading(false);
          
          // Show success toast
          toast({
            title: 'Login successful',
            description: `Welcome back, ${data.user.name || data.user.email}!`,
            variant: 'default'
          });

          // Handle redirect
          const nextRoute =
            typeof router.query.next === 'string'
              ? decodeURIComponent(router.query.next)
              : '/dashboard';
          router.replace(nextRoute);
        }
      } else {
        console.error('[AuthProvider login] No user data in API response.');
        toast({
          title: "Login Failed",
          description: "No user data received from server.",
          variant: "destructive",
        });
        setIsLoading(false); // Ensure loading is stopped
        return { error: "No user data received from server." };
      }

      console.log('[AuthProvider] login function completed, onAuthStateChange will handle redirection.');
      return { error: null }; // Successful login

    } catch (error: any) {
      console.error('[AuthProvider] login function error:', error);
      console.error('[AuthProvider] login function error (full):', error); // Log the full error object
      let toastMessage = "An unexpected error occurred during login. Please try again.";
      const errorTitle = "Login Failed";

      if (error.message === "Login timed out") {
        toastMessage = "Login request timed out. Please check your connection and try again.";
        // Ensure isLoading is set to false specifically for timeout
        setIsLoading(false);
      } else if (error.isAxiosError && error.response) {
        // Error from API response (e.g., 401, 403, 400, 500)
        console.error('[AuthProvider] login API response:', error.response); // Log the full API response
        const apiData = error.response.data; // This is the response body from your API
        const apiStatus = error.response.status;

        toastMessage = apiData?.error || apiData?.message || "Login failed. Please check your credentials or try again later.";
        const errorCode = apiData?.code;

        if (errorCode === "EMAIL_NOT_CONFIRMED") {
          toastMessage = apiData?.error || "Email not confirmed. Please check your inbox to verify your email.";
        } else if (errorCode === "INVALID_CREDENTIALS" || apiStatus === 401) {
          toastMessage = apiData?.error || "Invalid email or password.";
        } else if (errorCode === "LOGIN_FAILED" || apiStatus === 500) {
          toastMessage = apiData?.error || "Login failed due to a server error. Please try again later.";
        } else if (apiStatus === 400) {
          toastMessage = apiData?.error || "Invalid request. Please check your input.";
        } else if (apiStatus === 404) { // Endpoint not found
            toastMessage = "Login service not found. Please contact support.";
        }
        // Add any other specific errorCode handling here
      } else if (error.isAxiosError && !error.response) {
        // Network error (axios error, but no response from server)
        toastMessage = "Network error. Please check your internet connection and try again.";
      } else if (error.message) {
        // Other errors (not Axios, but have a message)
        toastMessage = error.message;
      }

      toast({
        title: errorTitle,
        description: toastMessage,
        variant: "destructive",
      });
      setIsLoading(false); // Ensure isLoading is false in all error paths of login
      return { error: toastMessage }; // This is what LoginForm.tsx expects
    }
    // Removed finally block here as onAuthStateChange and specific error paths handle setIsLoading(false)
  };

  // Refactored signup method
  const signup = async (email: string, password: string, userData: Partial<UserDetails> = {}) => {
      setIsLoading(true);
      try {
        const { name = '' } = userData;
        const { res, data } = await registerUser(name, email, password);

      if (!(res.status >= 200 && res.status < 300)) {
        // Handle API errors (e.g., 400, 409, 500) from /api/auth/register
        toast({
          title: "Signup Failed",
          description: data?.message || 'An unexpected error occurred.',
          variant: "destructive"
        });
        setIsLoading(false);
        return { error: data?.message || 'Signup failed', emailVerificationRequired: false };
      }

      if (data?.emailVerificationRequired) {
        toast({
          title: "Signup Successful",
          description: "Please check your email to verify your account."
        });
        // Optionally set minimal user info if available and desired, but no active session
        // For example: setUser({ email: data.user?.email, id: data.user?.id, name: data.user?.display_name, email_verified_pending: true });
        // For now, we don't set any user state to prevent confusion with an active session.
        setIsLoading(false);
        return { error: null, emailVerificationRequired: true };
      } else if (data?.session && data?.user) {
        // Auto-confirmed: API has set the cookie, now set client-side state
        // The API (/api/auth/register) should have set the HttpOnly cookie.
        // Here, we update the client-side state (React context, Supabase client session)

        // Set Supabase client session - this will trigger onAuthStateChange
        // which should then fetch the profile and update the user state.
        console.log('[AuthProvider DEBUG] signup: Attempting to set Supabase client session.');
        console.log('[AuthProvider DEBUG] signup: Using accessToken:', data.session.access_token);
        console.log('[AuthProvider DEBUG] signup: Using refreshToken:', data.session.refresh_token);
        const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });

        if (sessionError) {
          console.error("[AuthProvider DEBUG] signup: Error setting Supabase session:", sessionError);
          toast({
            title: "Signup Error",
            description: "Failed to initialize session. Please try logging in.",
            variant: "destructive"
          });
          // Ensure any partial tokens are cleared to prevent invalid sessions
          cleanupAuthState();
          setIsLoading(false);
          return { error: "Failed to initialize session.", emailVerificationRequired: false };
        }
        console.log('[AuthProvider DEBUG] signup: Supabase client-side session set successfully. Session data:', JSON.stringify(sessionData, null, 2));

        // setTokens is handled by onAuthStateChange or if direct setting is preferred:
        setTokens({ accessToken: data.session.access_token, refreshToken: data.session.refresh_token });

        // The user object from /api/auth/register might need mapping.
        // For now, we assume data.user is compatible or onAuthStateChange will handle it.
        // setUser(data.user); // This will be handled by onAuthStateChange after setSession

        const firstName = (data.user.user_metadata?.display_name || name).split(' ')[0];
        toast({ title: `Welcome, ${firstName}!` });

        const queryStringSignup = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '';
        const paramsSignup = new URLSearchParams(queryStringSignup);
        const next = paramsSignup.get('redirectTo') || paramsSignup.get('next') || '/dashboard';
        console.log('[AuthProvider DEBUG] signup: Attempting to redirect to:', next);
        router.replace(next);
        setIsLoading(false);
        return { error: null, emailVerificationRequired: false };
      } else {
        // Fallback for unexpected successful response structure
        toast({
          title: "Signup Error",
          description: "Unexpected response from server.",
          variant: "destructive"
        });
        setIsLoading(false);
        return { error: "Unexpected response from server.", emailVerificationRequired: false };
      }
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
              console.log('[AuthProvider DEBUG] onAuthStateChange: Entered. Current isLoading:', isLoading);
              console.log('[AuthProvider DEBUG] onAuthStateChange triggered. Event:', event);
              console.log('[AuthProvider DEBUG] Session object:', JSON.stringify(session, null, 2));
      
              setIsLoading(true); // Ensure isLoading is true at the start
              console.log('[AuthProvider DEBUG] onAuthStateChange: setIsLoading(true) called. New isLoading:', isLoading);
      
              try {
                if (session?.user) {
                  console.log('[AuthProvider DEBUG] Session and user found. User ID:', session.user.id);

                  // Inner try-catch for profile fetching and mapping
                  try {
                    console.log('[AuthProvider DEBUG] Attempting to fetch profile for user ID:', session.user.id);
                    // Explicitly log the exact query being made
                    console.log('[AuthProvider DEBUG] Supabase query: supabase.from("profiles").select("*").eq("id", session.user.id).single()');
                    console.log('[AuthProvider DEBUG] onAuthStateChange: About to fetch profile. Session user available:', !!session?.user);
                    const { data: profile, error: profileError } = await supabase
                      .from('profiles')
                      .select('*')
                      .eq('id', session.user.id)
                      .single();

                    console.log('[AuthProvider DEBUG] Raw profile data:', JSON.stringify(profile, null, 2));
                    console.log('[AuthProvider DEBUG] Profile fetch error (if any):', JSON.stringify(profileError, null, 2));

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
                    // This catch block is for errors specifically within the profile fetching/mapping phase
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
    resetPassword,
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