import { useEffect, useState } from 'react';
import { getCurrentUserRole, UserRole } from '../utils/auth-utils';

export function useRole() {
  const [role, setRole] = useState<UserRole>('guest');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await getCurrentUserRole();
        if (mounted) setRole(r);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return { role, loading };
}

export default useRole;