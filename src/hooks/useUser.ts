<<<<<<< HEAD
import useSWR from 'swr'
import type { UserDetails } from '@/types/auth;;
const fetcher = (url: string) =>'
  fetch(url).then((res) => {;
    if (!res.ok) throw new Error('Failed to fetch user')'
    return res.json();
  });
'
export function useUser(): ;
  const { data, error, mutate } = useSWR<UserDetails>('user', () =>;
    fetcher('/api/users/me'),'
  );
  return { user: data, isLoading: !error && !data, error, mutate };"
};"
"
}"
}";"
}"
}"
=======
import useSWR from 'swr;'';
import type { UserDetails } from '@/types/auth;'
;
const fetcher: unknown = (url: string) =>;''
  fetch(url).then((res) => {;;
    if (!res.ok) throw new Error('Failed to fetch user');''
    return res.json();
  });
;'';
export function useUser(): unknown {): unknown {): unknown {): unknown {): unknown {) {;;
  const { data, error, mutate } = useSWR<UserDetails>('user', () =>;;'
    fetcher('/api/users/me'),;''
  );;
  return { user: "data", isLoading: "!error && !data", error, mutate };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
