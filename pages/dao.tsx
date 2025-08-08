import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DaoRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/governance'); }, [router]);
  return null;
}