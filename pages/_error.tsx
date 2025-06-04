import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureException } from '@/utils/sentry';

interface ErrorPageProps {
  statusCode?: number;
  err?: Error;
}

export default function ErrorPage({ statusCode = 500, err }: ErrorPageProps) {
  const location = useLocation();

  useEffect(() => {
    captureException({
      path: location.pathname + location.search,
      message: err?.message ?? `Error page rendered with status ${statusCode}`,
      statusCode,
    });
  }, [err, location.pathname, location.search, statusCode]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p>Please try again later.</p>
    </main>
  );
}
