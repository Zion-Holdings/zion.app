
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection";
import { ProfileSetup } from "@/components/onboarding/ProfileSetup";
import { InterestSelection } from "@/components/onboarding/InterestSelection";
import { CategorySelection } from "@/components/onboarding/CategorySelection";
import { Steps, Step } from "@/components/ui/steps";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';

export default function Onboarding() {

  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if user is not authenticated and auth state is not loading
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {
      case "serviceProvider":
        return "creator";
      case "talent":
        return "jobSeeker";
      case "client":
        return "employer";
      default:
        return "buyer";
    }
  };

  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type);
    
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      router.push('/service-onboarding');
      return;
    } else if (type === "talent") {
      router.push('/talent-onboarding');
      return;
    }
    
    // Continue with the onboarding flow for clients
    setCurrentStep(1);
  };

  const handleProfileComplete = async (data: { displayName: string, bio: string, headline: string }) => {
    if (!user || !userType) {
      toast({
        title: "Authentication Error",
        description: "Your session may have expired. Please log in again.",
        variant: "destructive",
      });
      router.push('/login');
      return;
    }
    
    const dbUserType = mapUserTypeToDatabase(userType);
    
    try {
      await updateProfile({
        id: user.id,
        displayName: data.displayName,
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType as any,
        headline: data.headline,
        profileComplete: true
      });
      
      // Update onboarding milestone
      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id,
        _milestone: 'profile_completed',
        _status: true
      });
      
      toast({
        title: 'Profile completed!',
        description: 'Your profile has been set up successfully.',
      });

      // Proceed to next step
      setCurrentStep(2);

    } catch (error) {
      logErrorToProduction('Error updating profile:', { data: error });
      toast({
        title: 'Error',
        description: 'There was a problem updating your profile. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleInterestsComplete = (list: string[]) => {
    setInterests(list);
    setCurrentStep(3);
  };

  const handleCategoriesComplete = async (list: string[]) => {
    setCategories(list);
    if (user) {
      try {
        await updateProfile({
          id: user.id,
          interests,
          preferredCategories: list,
        });
      } catch (err) {
        logErrorToProduction('Error saving onboarding data:', { data: err });
      }
    }
    const dashboardRoute = userType === 'client' ? '/client-dashboard' : '/talent-dashboard';
    router.push(dashboardRoute);
  };

  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" },
    { label: "Create Profile", description: "Tell us about yourself" },
    { label: "Interests", description: "What topics are you into?" },
    { label: "Categories", description: "Tailor your experience" },
  ];

  // Show loading state or null while checking auth, useEffect will handle redirect
  if (isLoading || !user) {
    // You can return a loader here, or null, or a basic skeleton
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Zion
            </h1>
            <p className="text-zion-slate-light text-xl">
              Complete your profile to get started
            </p>
          </div>

          <div className="mb-12">
            <Steps currentStep={currentStep} className="max-w-xl mx-auto">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  status={
                    currentStep > index
                      ? "complete"
                      : currentStep === index
                      ? "current"
                      : "incomplete"
                  }
                  label={step.label}
                  description={step.description}
                />
              ))}
            </Steps>
          </div>

          <div className="bg-zion-blue-dark rounded-xl p-8 shadow-lg border border-zion-blue-light">
            {currentStep === 0 && (
              <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />
            )}
            {currentStep === 1 && (
              <ProfileSetup onComplete={handleProfileComplete} userType={userType!} />
            )}
            {currentStep === 2 && (
              <InterestSelection onComplete={handleInterestsComplete} />
            )}
            {currentStep === 3 && (
              <CategorySelection onComplete={handleCategoriesComplete} />
            )}

            {currentStep > 0 && (
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
