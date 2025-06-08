import { useContext } from 'react';
import { AuthContext } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // TEMPORARILY ALWAYS RETURN MOCK CONTEXT IF UNDEFINED for diagnostics
    console.warn("'useAuth' context is undefined. Returning mock context for diagnostics.");
    return {
        user: null,
        isLoading: true, // To allow pages to show a loading state or similar
        isAuthenticated: false,
        onboardingStep: null,
        setOnboardingStep: () => {},
        login: async () => { console.warn("Login not available during static export"); return { error: { message: "Not available" } }; },
        signup: async () => { console.warn("Signup not available during static export"); return { error: { message: "Not available" } }; },
        register: async () => { console.warn("Register not available during static export"); return { error: { message: "Not available" } }; },
        logout: async () => { console.warn("Logout not available during static export"); },
        resetPassword: async () => { console.warn("Reset password not available during static export"); return { error: { message: "Not available" } }; },
        updateProfile: async () => { console.warn("Update profile not available during static export"); return { error: { message: "Not available" } }; },
        loginWithGoogle: async () => { console.warn("Login with Google not available during static export"); },
        loginWithFacebook: async () => { console.warn("Login with Facebook not available during static export"); },
        loginWithTwitter: async () => { console.warn("Login with Twitter not available during static export"); },
        loginWithWeb3: async () => { console.warn("Login with Web3 not available during static export"); },
        signIn: async () => { console.warn("SignIn not available during static export"); return { error: { message: "Not available" } }; },
        signOut: async () => { console.warn("SignOut not available during static export"); },
        signUp: async () => { console.warn("SignUp not available during static export"); return { error: { message: "Not available" } }; },
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
