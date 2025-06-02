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
    tokens, setTokens,
    avatarUrl, setAvatarUrl
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
  } = useAuthOperations(setUser, setIsLoading, setAvatarUrl);

  // Wrapper for login to match the AuthContextType interface
  const login = async (email: string, password: string) => {
    const { res, data } = await loginUser(email, password); // Calls /api/auth/login

    // data will have { error: "message", code: "ERROR_CODE" } from the API if status !== 200
    // data will have { user, accessToken, refreshToken } from the API if status === 200

    if (res.status === 200) {
      // Successful API call
      setTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });
      const clientLoginResult = await loginImpl({ email, password }); // This is supabase.auth.signInWithPassword client-side

      if (clientLoginResult?.error) {
        // loginImpl (useEmailAuth.login) already shows a toast.
        console.error("Client-side login after server confirmation failed:", clientLoginResult.error);
        return { error: (clientLoginResult.error as any)?.message || "Client-side login failed." };
      }

      // Navigation logic (already present)
      const params = new URLSearchParams(location.search);
      const next = params.get('redirectTo') || params.get('next') || '/equipment/recommendations';
      navigate(next, { replace: true });

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
              setAvatarUrl(mappedUser.avatarUrl || null);
              
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
            setAvatarUrl(null);
          }
        } else {
          setUser(false);
          setAvatarUrl(null);
          
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