import React, { useEffect } from "react";
import { supabase, getFromProfiles } from "../../integrations/supabase/client";
import { useAuthOperations } from "../../hooks/useAuthOperations";
import { AuthContext } from "./AuthContext";
import { cleanupAuthState } from "../../utils/authUtils";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from "./useAuthState";
import { useAuthEventHandlers } from "./useAuthEventHandlers";
import { mapProfileToUser } from "./profileMapper";
import { loginUser, registerUser } from "@/services/authService";
import { safeStorage } from "@/utils/safeStorage";
import { toast } from "@/hooks/use-toast"; // Import toast
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user, setUser,
    isLoading, setIsLoading,
    onboardingStep, setOnboardingStep,
    tokens, setTokens
  } = useAuthState();
  
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
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
    const { res, data } = await loginUser(email, password); // Calls /api/auth/login

    // Check for specific "Email not confirmed" error first
    if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {
      toast({
        title: "Login Failed",
        description: data.error || "Email not confirmed. Please check your inbox to verify your email.",
        variant: "destructive",
      });
      return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." };
    }

    // Handle other errors from the API call
    if (res.status === 400) { // Bad request (e.g. missing fields)
      toast({ title: "Login Failed", description: data?.error || 'Missing email or password', variant: "destructive" });
      return { error: data?.error || 'Missing email or password' };
    }
    if (res.status === 401) { // Unauthorized (invalid credentials)
      let message = data?.message || 'Incorrect email or password';
      if (data?.code === 'EMAIL_NOT_FOUND') message = 'Email not registered';
      else if (data?.code === 'WRONG_PASSWORD') message = 'Incorrect password';
      else if (data?.code === 'TOKEN_EXPIRED') message = 'Session expired, please log in again';
      toast({ title: "Login Failed", description: message, variant: "destructive" });
      return { error: message };
    }
    // Catch-all for other non-200 statuses from loginUser
    if (res.status !== 200) {
      toast({ title: "Login Failed", description: data?.error || 'An unexpected error occurred during login.', variant: "destructive" });
      return { error: data?.error || 'Login failed' };
    }

    // At this point, loginUser call was successful (200 OK)
    setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });

    // Now, attempt client-side Supabase sign-in to synchronize auth state
    // loginImpl is useEmailAuth.login which calls supabase.auth.signInWithPassword
    const clientLoginResult = await loginImpl({ email, password });

    if (clientLoginResult?.error) {
      // useEmailAuth.login already shows a toast on error.
      // We just need to return the error to the caller of AuthProvider.login
      console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
      // It's possible the server token is valid but client Supabase has an issue.
      // For now, treat as a login failure and let user retry.
      // Potentially clear tokens if this state is problematic: await logout();
      return { error: (clientLoginResult.error as any)?.message || "Client-side login failed." };
    }
codex/implement-ai-recommendations-endpoint
    const params = new URLSearchParams(location.search);
    const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
    navigate(next, { replace: true });
main

    return { error: null }; // Successful login
  };

  // Refactored signup method
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const { res, data } = await registerUser(name, email, password);

      if (!res.ok) {
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

        const params = new URLSearchParams(location.search);
        const next = params.get('redirectTo') || params.get('next') || '/dashboard';
        navigate(next, { replace: true });
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
                const params = new URLSearchParams(location.search);
                const nextFromUrl = params.get('redirectTo') || params.get('next'); // Renamed to avoid conflict

                const nextPathFromStorage = safeStorage.getItem('nextPath');

                if (nextPathFromStorage) {
                  safeStorage.removeItem('nextPath');
                  navigate(decodeURIComponent(nextPathFromStorage), { replace: true });
                } else if (location.state?.pendingAction === 'buyNow' && location.state?.pendingActionArgs) {
                  const { id, title, price } = location.state.pendingActionArgs;
                  dispatch(addItem({ id, title, price }));
                  // Clear pending action from state first
                  navigate(location.pathname, { state: {}, replace: true });
                  // Navigate to checkout
                  navigate('/checkout', { replace: true });
                } else if (nextFromUrl) {
                  navigate(decodeURIComponent(nextFromUrl), { replace: true });
                }
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
          setUser(false);
          
          // Show logout toast when user logs out
          if (event === 'SIGNED_OUT') {
            handleSignedOut();
          }
        }
        setIsLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

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
    tokens
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};