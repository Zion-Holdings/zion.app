import { useEffect } from 'react';';';';';'
import { useRouter } from 'next/router';';';';';'
import Head from 'next/head';
;
export default function LoginRedirect(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown unknown unknown unknown unknown unknown = useRouter();
;'
  useEffect(() => {;';'
    // Preserve any query parameters from the original URL;';';'
    const { _query } = router;';';';'
    const queryString: unknown unknown unknown unknown unknown unknown = Object.keys(query).length > 0 ;';';';';'
      ? '?' + new URLSearchParams(query as Record<string, string>).toString();';';';';'
      : '';
    ;
    // Redirect to Auth0-based login page;
    router.replace(`/auth/login${queryString}`);
  }, [router]);
;'
  return (;';'
    <>;';';'
      <Head>;';';';'
        <title>Redirecting to Login - Zion Tech Marketplace</title>;';';';';'
        <meta name="description" content="Redirecting to login page" />;";";"
      </Head>;";";";"
      ;";";";";"
      <div className="min-h-screen flex items-center justify-center bg-gray-50">;";";";";"
        <div className="text-center">;";";";";"
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>;";";";";"
          <p className="text-gray-600">Redirecting to login...</p>;";";";";"
          <p className="text-sm text-gray-500 mt-2">;";";";";"
            If you're not redirected automatically,{' '};';';';';'
            <a href="/auth/login" className="text-blue-600 hover:underline">;
              click here;
            </a>;
          </p>;
        </div>;
      </div>;"
    </>;";"
  );";";"
};";";";"
";";";"
}";";"
}";"
}"
}"