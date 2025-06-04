import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { captureException } from '@/utils/sentry';

interface ErrorPageProps {
  statusCode?: number;
  err?: Error;
}

export default function ErrorPage({ statusCode = 500, err }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    captureException({
      path: router.asPath,
      message: err?.message ?? `Error page rendered with status ${statusCode}`,
      statusCode,
    });
  }, [err, router.asPath, statusCode]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p>Please try again later.</p>
    </main>
  );
}
