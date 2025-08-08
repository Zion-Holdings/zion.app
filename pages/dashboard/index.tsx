import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardIndex() {
  const router = useRouter();
  useEffect(() => {
    const role = (typeof window !== 'undefined' && (window.localStorage.getItem('userRole') as 'client' | 'talent' | null)) || 'talent';
    router.replace(role === 'client' ? '/dashboard/client' : '/dashboard/talent');
  }, [router]);
  return null;
}