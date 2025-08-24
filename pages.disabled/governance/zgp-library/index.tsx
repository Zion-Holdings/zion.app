import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ZgpLibraryAlias() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/dao/templates');
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-600">
      Redirecting to /dao/templates…
    </div>
  );
}