<<<<<<< HEAD
import React from 'react';';
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus;'
;;
import { OnboardingTracker } from './OnboardingTracker;'';
import type { OnboardingStep } from './OnboardingTracker;'
;
export function ClientOnboardingSteps(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const onboardingStatus: unknown = useOnboardingStatus();
;
  const steps: unknown OnboardingStep[] = [;''
    {;;
      id: 'post-job',;;'
      label: 'Post your first job',;;'
      completed: "onboardingStatus.jobPosted",;";";";";""
      link: '/post-job',;;'
      action: 'Post Job',;'
    },;''
    {;;
      id: 'invite',;;'
      label: 'Send invitation to talent',;;'
      completed: "onboardingStatus.inviteSent",;";";";";""
      link: '/talent',;;'
      action: 'Find Talent',;'
    },;''
    {;;
      id: 'response',;;'
      label: 'Receive your first application',;;'
      completed: "onboardingStatus.responseReceived",;";";";";""
      link: '/client-dashboard',;;'
      action: 'Check Dashboard',;'
    },;
  ];''
;;
  return <OnboardingTracker steps={steps} title="Get Started With Hiring" />;";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import React from 'react'
import { useOnboardingStatus } from '@/hooks/useOnboardingStatus'

import { OnboardingTracker } from './OnboardingTracker'
import type { OnboardingStep } from './OnboardingTracker'

export function ClientOnboardingSteps(): '
  const onboardingStatus = useOnboardingStatus()'

  const steps: unknown OnboardingStep[] = ['
    {'
      id: 'post-job','
      label: 'Post your first job','
      completed: "onboardingStatus.jobPosted
      link: '/post-job','
      action: 'Post Job','
    },'
    {'
      id: 'invite','
      label: 'Send invitation to talent','
      completed: onboardingStatus.inviteSent"
      link: '/talent','
      action: 'Find Talent','
    },'
    {'
      id: 'response','
      label: 'Receive your first application','
      completed: "onboardingStatus.responseReceived
      link: '/client-dashboard','
      action: 'Check Dashboard','
    },;
  ]'
'
  return <OnboardingTracker steps={steps} title=Get Started With Hiring" />"
};

}"
}"

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
