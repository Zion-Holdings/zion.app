import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const path = router.asPath || '';
  const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
  const description = `The page at ${path || 'this URL'} could not be found.`;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
  const canonical = baseUrl && path ? `${baseUrl}${path}` : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {canonical && <meta property="og:url" content={canonical} />}
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 – Page Not Found</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}
