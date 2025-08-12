
import type { UserDetails } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { checkNewRegistration } from "@/utils/authUtils";
import type { useRouter } from 'next/router'; // Import useRouter for ReturnType

/**
 * Custom hook for auth event handling
 */
export function useAuthEventHandlers(
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>,
  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>,
  router: ReturnType<typeof useRouter> // Use ReturnType<typeof useRouter>
) {
  // Removed: const router = useRouter();

  const handleSignedIn = (mappedUser: UserProfile) => {
    toast({
      title: "Welcome back!",
      description: `You're now signed in as ${mappedUser.displayName || mappedUser.email}`,
      variant: "default",
    });
    
    // Check for new registration and send welcome email if needed
    setTimeout(() => {
      if (mappedUser) {
        checkNewRegistration(mappedUser);
      }
    }, 0);

    // Check if user needs to complete onboarding
    if (!mappedUser.profileComplete && router) { // check router instance
      setOnboardingStep('profile');
      toast({
        title: "Complete your profile",
        description: "Please complete your profile information to get started",
        variant: "default",
      });
      router.push('/onboarding'); // Use Next.js router
    }
  };

  const handleSignedOut = () => {
    toast({
      title: "Signed out",
      description: "You have been successfully logged out",
      variant: "default",
    });
  };

  return {
    handleSignedIn,
    handleSignedOut
  };
}
