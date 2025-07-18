import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { UserTypeSelection } from '@/components/onboarding/UserTypeSelection'
import { ProfileSetup } from '@/components/onboarding/ProfileSetup'
import { InterestSelection } from '@/components/onboarding/InterestSelection'
import { CategorySelection } from '@/components/onboarding/CategorySelection'
import { Steps, Step } from '@/components/ui/steps'
import { supabase } from '@/integrations/supabase/client'
import { toast } from '@/hooks/use-toast'
import { logErrorToProduction } from '@/utils/productionLogger;
'
export defaultault function Onboarding(): ;
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0)'
  const [userType, setUserType] = useState<;
    'serviceProvider' | 'talent' | 'client' | null;
  >(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [_categories, setCategories] = useState<string[]>([]);
  const router = useRouter()'
;
  useEffect(() => {;
    // Redirect to login if user is not authenticated and auth state is not loading'
    if (!isLoading && !user) {;
      router.push('/login');
    };
  }, [user, isLoading, router])'
;
  // Convert our user types to match what's expected in the UserProfile type'
  const mapUserTypeToDatabase: (;",;"
    type: 'serviceProvider' | 'talent' | 'client',;
  ): 'talent' | 'client' | 'admin' => {'
    switch (type) {;
      case 'serviceProvider':;
        return 'admin'
      case 'talent':;
        return 'talent'
      case 'client':;
        return 'client'
    };
  };
'
  const handleUserTypeSelect: (;",;"
    _type: 'serviceProvider' | 'talent' | 'client','
  ) => {;
    setUserType(type);
'
    // Direct to specific registration page based on user type;
    if (type === 'serviceProvider') {;
      router.push('/service-onboarding')'
      return;
    } else if (type === 'talent') {;
      router.push('/talent-onboarding');
      return;
    };
'
    // Continue with the onboarding flow for clients;
    setCurrentStep(1);
  }'
;
  const handleProfileComplete = async (data: {
    displayName: string;,"
    bio: "string;"
    _headline: "string;"
  }) => {;"
    if (!user || !userType) {;"
      toast({;"
        title: 'Authentication Error',;
        description: 'Your session may have expired. Please log in again.',;
        variant: 'destructive','
      });
      router.push('/login');
      return;
    };
'
    const dbUserType = mapUserTypeToDatabase(userType);
    try {'
      await updateProfile({;
        id: "user.id"
        displayName: "data.displayName"
        bio: data.bio, // This is now valid since we added bio to UserDetails;"
        userType: "dbUserType"
        headline: "data.headline"
        profileComplete: true,;"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
;"
      if (!supabase) throw new Error('Supabase client not initialized')'
      // Update onboarding milestone;
      await supabase.rpc('update_onboarding_milestone', {;
        _user_id: "user.id"
        _milestone: 'profile_completed',;
        _status: true,;"
      });"
;"
      toast({;"
        title: 'Profile completed!',;
        description: 'Your profile has been set up successfully.',;
      })'
;
      // Proceed to next step;
      setCurrentStep(2)'
    } catch {;
      logErrorToProduction('Error updating profile:', { data: "error "});"
      toast({;"
        title: 'Error','
        description:;
          'There was a problem updating your profile. Please try again.',;
        variant: 'destructive',;