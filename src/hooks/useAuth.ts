import { useContext } from 'react';
import { AuthContext } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
import { logWarn } from '@/utils/productionLogger';

export const useAuth = (): AuthContextType => {

  const context = useContext(AuthContext);
  if (context === undefined) {
    // Provide a minimal unauthenticated context to avoid infinite loading loops
    logWarn("'useAuth' context is undefined. Returning fallback auth state.");
    return {
        user: null,
        isLoading: false, // Avoid endless spinners when provider is missing
        isAuthenticated: false,
        onboardingStep: null,
        setOnboardingStep: () => {},
        login: async () => { logWarn("Login not available during static export"); return { error: { message: "Not available" } }; },
        signup: async () => { logWarn("Signup not available during static export"); return { error: { message: "Not available" } }; },
        register: async () => { logWarn("Register not available during static export"); return { error: { message: "Not available" } }; },
        logout: async () => { logWarn("Logout not available during static export"); },
        resetPassword: async () => { logWarn("Reset password not available during static export"); return { error: { message: "Not available" } }; },
        updateProfile: async () => { logWarn("Update profile not available during static export"); return { error: { message: "Not available" } }; },
        loginWithGoogle: async () => { logWarn("Login with Google not available during static export"); },
        loginWithGitHub: async () => { logWarn("Login with GitHub not available during static export"); },
        loginWithFacebook: async () => { logWarn("Login with Facebook not available during static export"); },
        loginWithTwitter: async () => { logWarn("Login with Twitter not available during static export"); },
        loginWithWeb3: async () => { logWarn("Login with Web3 not available during static export"); },
        signIn: async () => { logWarn("SignIn not available during static export"); return { error: { message: "Not available" } }; },
        signOut: async () => { logWarn("SignOut not available during static export"); },
        signUp: async () => { logWarn("SignUp not available during static export"); return { error: { message: "Not available" } }; },
        setUser: () => {},
        tokens: null,
        avatarUrl: null,
        setAvatarUrl: () => {},
      } as AuthContextType;
    // This is the end of the "if (context === undefined)" block for the diagnostic version
  }
  // If context is not undefined, it will be returned here.
  // All other throw new Error lines related to context being undefined are effectively bypassed by the above return.
  return context as AuthContextType;
};
