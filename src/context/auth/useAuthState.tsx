<<<<<<< HEAD
import { useState } from 'react''
import  type { UserDetails }  from '@/types/auth'
=======
import { useState } from 'react';';
import type { UserDetails } from '@/types/auth;'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState(): ;
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
  const [tokens, setTokens] = useState<{;
    accessToken: string;
    refreshToken?: string;
  } | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  return {;
    user,;
    setUser,;
    isLoading,;
    setIsLoading,;
    onboardingStep,;
    setOnboardingStep,;
<<<<<<< HEAD
    tokens,;''
    setTokens,;''
    avatarUrl,'
    setAvatarUrl,'
  };
};
}'
=======
    tokens,;
    setTokens,;
    avatarUrl,;''
    setAvatarUrl,;
  };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''