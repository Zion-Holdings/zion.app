import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage, safeSessionStorage } from "@/utils/safeStorage";
import { toast } from "@/hooks/use-toast"; // Import toast
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

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
    login: loginImpl,
    signup: signupImpl,
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
    const { res, data } = await loginUser(email, password); // Calls /auth/login

    // data will have { error: "message", code: "ERROR_CODE" } from the API if status !== 200
    // data will have { user, accessToken } from the API if status === 200

    if (res.status === 200) {
      // Successful API call
      setTokens({ accessToken: data.accessToken });
      const authTokenKey = "auth.token";
      if (rememberMe) {
        safeStorage.setItem(authTokenKey, data.accessToken);
      } else {
        safeSessionStorage.setItem(authTokenKey, data.accessToken);
      }
      const clientLoginResult = await loginImpl({ email, password }); // This is supabase.auth.signInWithPassword client-side

      if (clientLoginResult?.error) {
        // loginImpl (useEmailAuth.login) already shows a toast.
        console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
        // Clear potentially stale tokens to avoid invalid session loops
        cleanupAuthState();
        return { error: (clientLoginResult.error as any)?.message || "Client-side login failed." };
      }

      // Navigation logic
      const queryString = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '';
      const params = new URLSearchParams(queryString);
      const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
      router.replace(next);

      return { error: null }; // Successful login
    }

    // Handle errors from the API call (res.status !== 200)
    // data is expected to be { error: "message", code: "ERROR_CODE" }
    let toastMessage = data?.error || "An unknown error occurred.";
    const errorCode = data?.code;

    if (errorCode === "EMAIL_NOT_CONFIRMED") { // Expected for 403
      toastMessage = data?.error || "Email not confirmed. Please check your inbox to verify your email.";
    } else if (errorCode === "INVALID_CREDENTIALS") { // Expected for 401
      toastMessage = data?.error || "Invalid email or password.";
    } else if (errorCode === "LOGIN_FAILED" || res.status === 500) { // Expected for 500 or other
      toastMessage = data?.error || "Login failed due to a server error. Please try again later.";
    } else if (res.status === 400) { // Bad request (e.g. missing fields, though schema validation is in API)
        toastMessage = data?.error || "Invalid request. Please check your input.";
    } else if (res.status === 404) { // Endpoint not found or invalid path
        toastMessage = "Invalid credentials";
    }
    // Add any other specific error code handling here if needed

    toast({
      title: "Login Failed",
      description: toastMessage,
      variant: "destructive",
    });
    return { error: toastMessage };
  };

  // Refactored signup method
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
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
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });

        if (sessionError) {
          console.error("Error setting Supabase session:", sessionError);
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
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'TOKEN_REFRESH_FAILED') {
          console.error('AuthProvider: Token refresh failed, clearing session');
          cleanupAuthState();
          setUser(null);
          setAvatarUrl(null);
          handleSignedOut();
          router.replace('/login');
          return;
        }
        try {
          if (session?.user) {
            try {
              const { data: profile, error: profileError } = await getFromProfiles()
                .select('*')
                .eq('id', session.user.id)
                .single();

              if (profileError) {
                console.error("Error fetching user profile:", profileError);
                // Consider how to handle user state: setUser(null) or keep existing if any?
                // For now, if profile fetch fails, treat as if user data is incomplete/unavailable for app use
                setUser(null);
                setAvatarUrl(null);
              } else if (profile) {
                const mappedUser = mapProfileToUser(session.user, profile);
                setUser(mappedUser);
                setAvatarUrl(mappedUser.avatarUrl || null);

                if (event === 'SIGNED_IN') {
                  handleSignedIn(mappedUser);
                  const queryStringAuthChange = router.asPath.includes('?') ? router.asPath.substring(router.asPath.indexOf('?')) : '';
                  const paramsAuthChange = new URLSearchParams(queryStringAuthChange);
                  const nextFromUrl = paramsAuthChange.get('redirectTo') || paramsAuthChange.get('next');
                  const nextPathFromStorage = safeStorage.getItem('nextPath');

                  // Note: location.state from react-router-dom is not directly available with next/router.
                  // This logic for 'pendingAction' would need to be re-implemented using query params or other state management if still needed.
                  // For now, focusing on removing react-router-dom direct dependencies.
                  if (nextPathFromStorage) {
                    safeStorage.removeItem('nextPath');
                    router.replace(decodeURIComponent(nextPathFromStorage));
                  } else if (nextFromUrl) { // Simplified: removed location.state logic for now
                    router.replace(decodeURIComponent(nextFromUrl));
                  }
                }
              } else {
                // Profile not found, but no error from Supabase (should be rare with .single() if no RLS issue)
                console.warn("User profile not found for user:", session.user.id);
                setUser(null);
                setAvatarUrl(null);
              }
            } catch (innerError) {
              console.error("Inner error during profile processing:", innerError);
              setUser(null);
              setAvatarUrl(null);
            }
          } else { // No session or session.user is null
            setUser(null);
            setAvatarUrl(null);
            if (event === 'SIGNED_OUT') {
              handleSignedOut();
            }
          }
        } catch (outerError) {
          console.error("Outer error in onAuthStateChange callback:", outerError);
          // Ensure user state is cleared in case of unexpected errors
          setUser(null);
          setAvatarUrl(null);
        } finally {
          setIsLoading(false);
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
    login,
    // register, // Removed as signup now covers its functionality
    signup,
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