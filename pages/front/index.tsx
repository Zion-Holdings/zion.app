import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FrontIndexRedirect() {
  const router = useRouter();
  useEffect(() => {
<<<<<<< HEAD
    router.replace('/main/front');
=======
    router.replace('/');
>>>>>>> origin/feat/futuristic-homepage
  }, [router]);
  return null;
}