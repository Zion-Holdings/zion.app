import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const LoginPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // Log Auth0 configuration status (client-side)
  useEffect(() => {
    console.log('Auth0 Environment Check:', {
      baseUrl: typeof window !== 'undefined' ? window.location.origin : 'server-side',
      auth0IssuerBaseUrl: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ? 'SET' : 'NOT SET',
      auth0ClientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ? 'SET' : 'NOT SET'
    });
  }, []);

  useEffect(() => {
    console.log('Login page - Auth state:', { 
      user: user ? { 
        sub: user.sub, 
        email: user.email, 
        name: user.name 
      } : null, 
      isLoading, 
      error: error ? error.message : null 
    });
    
    // Redirect authenticated users to dashboard
    if (user && !isLoading) {
      const returnTo = router.query.returnTo as string || '/dashboard';
      console.log('User is authenticated, redirecting to:', returnTo);
      router.push(returnTo);
    }
  }, [user, isLoading, router, error]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Sign In - Zion Tech Marketplace</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto">
              <img 
                className="mx-auto h-12 w-auto" 
                src="/logos/zion-logo.png" 
                alt="Zion Tech" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Authentication Error
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error.message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {/* Primary login button */}
            <div>
              <a
                href="/api/auth/login"
                onClick={(e) => {
                  console.log('Login button clicked - redirecting to /api/auth/login');
                  console.log('Current URL:', window.location.href);
                  // Don't prevent default - let the navigation happen
                }}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </a>
            </div>

            {/* Social login options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="/api/auth/login?connection=google-oauth2"
                  onClick={(e) => {
                    console.log('Google login button clicked - redirecting to /api/auth/login?connection=google-oauth2');
                  }}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="ml-2">Google</span>
                </a>

                <a
                  href="/api/auth/login?connection=github"
                  onClick={(e) => {
                    console.log('GitHub login button clicked - redirecting to /api/auth/login?connection=github');
                  }}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
