import React from 'react
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus;
;;
import { OnboardingTracker } from './OnboardingTracker;'
import type { OnboardingStep } from './OnboardingTracker;
;
export function TalentOnboardingSteps(): unknown {): unknown {): unknown {): unknown {): unknown {) {;'
  const onboardingStatus: unknown = useOnboardingStatus();
;
  const steps: unknown OnboardingStep[] = [;'
    {;;
      id: 'profile',;;
      label: 'Complete your profile',;;
      completed: "onboardingStatus.profileCompleted",;";";";";"
      link: '/profile',;;
      action: 'Update',;
    },;'
    {;;
      id: 'skills',;;
      label: 'Add your top skills',;;
      completed: "onboardingStatus.skillsAdded",;";";";";"
      link: '/profile/skills',;;
      action: 'Add Skills',;
    },;'
    {;;
      id: 'availability',;;
      label: 'Set your availability',;;
      completed: "onboardingStatus.availabilitySet",;";";";";"
      link: '/profile/availability',;;
      action: 'Set',;
    },;'
    {;;
      id: 'match',;;
      label: 'Receive your first job match',;;
      completed: "onboardingStatus.matchReceived",;";";";";"
      link: '/talent-dashboard',;;
      action: 'View Matches',;
    },;
  ];'
;
  return <OnboardingTracker steps={steps} />;
};
;
};'
}
}'
}'