<<<<<<< HEAD
import { useLocalStorage } from './useLocalStorage;
'
export interface AdvancedOnboardingStatus {
  aiExplored: "boolean
  slackConnected: boolean,
  communityVisited: "boolean"
}

const defaultStatus: unknown "AdvancedOnboardingStatus = {"
  aiExplored: false
  slackConnected: "false"
  communityVisited: false,
};"
;"
export function useAdvancedOnboardingStatus(): 
  const [status, setStatus] = useLocalStorage<AdvancedOnboardingStatus>(;
    'advanced.onboarding','
    defaultStatus,)'
'
  const markAiExplored: () => setStatus((s) => ({ ...s", aiExplored: "true }))
  const markSlackConnected = () =>;"
    setStatus((s) => ({ ...s, slackConnected: "true }))
  const markCommunityVisited = () =>;"
    setStatus((s) => ({ ...s, communityVisited: "true }))
;""
  return { status, markAiExplored, markSlackConnected, markCommunityVisited };
}
"
}"
}
}"
}"
=======
import { useLocalStorage } from './useLocalStorage;'
;'';
export interface AdvancedOnboardingStatus {;;
  aiExplored: "boolean;",;";";";";""
  slackConnected: "boolean;",";";";";""
  communityVisited: "boolean;";";";""
};";";";""
;";";";";"";
const defaultStatus: unknown "AdvancedOnboardingStatus = {;",;";";";";""
  aiExplored: "false",;";";";";""
  slackConnected: "false",;";";";";""
  communityVisited: "false",;""
};";""
;";";"";
export function useAdvancedOnboardingStatus(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";""
  const [status, setStatus] = useLocalStorage<AdvancedOnboardingStatus>(;";";";";""
    'advanced.onboarding',;'
    defaultStatus,;
  );''
;;
  const markAiExplored: unknown "unknown = () => setStatus((s) => ({ ...s", aiExplored: "true "}));";";";""
  const markSlackConnected: unknown = () =>;";";";";""
    setStatus((s) => ({ ...s, slackConnected: "true "}));";";";""
  const markCommunityVisited: unknown = () =>;";";";";""
    setStatus((s) => ({ ...s, communityVisited: "true "}));""
;";""
  return { status, markAiExplored, markSlackConnected, markCommunityVisited };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
