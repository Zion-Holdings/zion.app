import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ForumRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/community'); }, [router]);
  return null;
}