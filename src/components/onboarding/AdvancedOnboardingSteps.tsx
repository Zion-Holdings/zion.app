<<<<<<< HEAD
import { OnboardingTracker } from './OnboardingTracker;'';
import type { OnboardingStep } from './OnboardingTracker;'';
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus;'
;
export function AdvancedOnboardingSteps(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const { _status } = useAdvancedOnboardingStatus();
;
  const steps: unknown OnboardingStep[] = [;''
    {;;
      id: 'explore-ai',;;'
      label: 'Explore AI tools',;;'
      completed: "status.aiExplored",;";";";";""
      link: '/features/ai-content-generation',;;'
      action: 'Explore',;'
    },;''
    {;;
      id: 'connect-slack',;;'
      label: 'Connect Slack integration',;;'
      completed: "status.slackConnected",;";";";";""
      link: '/features/integrations',;;'
      action: 'Connect',;'
    },;''
    {;;
      id: 'community',;;'
      label: 'Join the community forum',;;'
      completed: "status.communityVisited",;";";";";""
      link: '/community',;;'
      action: 'Join',;'
    },;
  ];''
;;
  return <OnboardingTracker steps={steps} title="Discover Advanced Features" />;";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import { OnboardingTracker } from './OnboardingTracker'
import type { OnboardingStep } from './OnboardingTracker'
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'

export function AdvancedOnboardingSteps(): '
  const { _status } = useAdvancedOnboardingStatus()'

  const steps: unknown OnboardingStep[] = ['
    {'
      id: 'explore-ai','
      label: 'Explore AI tools','
      completed: "status.aiExplored
      link: '/features/ai-content-generation','
      action: 'Explore','
    },'
    {'
      id: 'connect-slack','
      label: 'Connect Slack integration','
      completed: status.slackConnected"
      link: '/features/integrations','
      action: 'Connect','
    },'
    {'
      id: 'community','
      label: 'Join the community forum','
      completed: "status.communityVisited
      link: '/community','
      action: 'Join','
    },;
  ]'
'
  return <OnboardingTracker steps={steps} title=Discover Advanced Features" />"
};

}"
}"

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
