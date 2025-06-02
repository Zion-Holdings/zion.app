import { OnboardingTracker, OnboardingStep } from './OnboardingTracker';
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus';

export function AdvancedOnboardingSteps() {
  const { status } = useAdvancedOnboardingStatus();

  const steps: OnboardingStep[] = [
    {
      id: 'explore-ai',
      label: 'Explore AI tools',
      completed: status.aiExplored,
      link: '/features/ai-content-generation',
      action: 'Explore',
    },
    {
      id: 'connect-slack',
      label: 'Connect Slack integration',
      completed: status.slackConnected,
      link: '/features/integrations',
      action: 'Connect',
    },
    {
      id: 'community',
      label: 'Join the community forum',
      completed: status.communityVisited,
      link: '/community',
      action: 'Join',
    },
  ];

  return <OnboardingTracker steps={steps} title="Discover Advanced Features" />;
}
