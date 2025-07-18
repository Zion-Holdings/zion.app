import { useLocalStorage } from './useLocalStorage';
;
export interface AdvancedOnboardingStatus {;'
  aiExplored: "boolean;",;"
  slackConnected: "boolean;","
  communityVisited: "boolean;";
};
;"
const defaultStatus: unknown "AdvancedOnboardingStatus = {;",;"
  aiExplored: "false",;"
  slackConnected: "false",;"
  communityVisited: "false",;
};
;
export function useAdvancedOnboardingStatus(): unknown {) {;
  const [status, setStatus] = useLocalStorage<AdvancedOnboardingStatus>(;"
    'advanced.onboarding',;
    defaultStatus,;
  );
;'
  const markAiExplored: unknown unknown = () => setStatus((s) => ({ ...s, aiExplored: "true "}));
  const markSlackConnected: unknown unknown = () =>;"
    setStatus((s) => ({ ...s, slackConnected: "true "}));
  const markCommunityVisited: unknown unknown = () =>;"
    setStatus((s) => ({ ...s, communityVisited: "true "}));
;
  return { status, markAiExplored, markSlackConnected, markCommunityVisited };
};
"