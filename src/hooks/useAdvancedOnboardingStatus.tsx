import { useLocalStorage } from './useLocalStorage';

export interface AdvancedOnboardingStatus {
  aiExplored: boolean;
  slackConnected: boolean;
  communityVisited: boolean;
}

const defaultStatus: AdvancedOnboardingStatus = {
  aiExplored: false,
  slackConnected: false,
  communityVisited: false,
};

export function useAdvancedOnboardingStatus() {
  const [status, setStatus] = useLocalStorage<AdvancedOnboardingStatus>(
    'advanced.onboarding',
    defaultStatus
  );

  const markAiExplored = () => setStatus((s) => ({ ...s, aiExplored: true }));
  const markSlackConnected = () => setStatus((s) => ({ ...s, slackConnected: true }));
  const markCommunityVisited = () => setStatus((s) => ({ ...s, communityVisited: true }));

  return { status, markAiExplored, markSlackConnected, markCommunityVisited };
}
